// PWA Install — apenas APIs nativas do navegador.
// Gatilhos: (1) 2s após a entrada no site, (2) intenção de sair (mouse indo para
// fechar a aba / troca de aba / mobile: scroll rápido para o topo).
// - Android/Desktop Chrome/Edge: dispara o prompt nativo (beforeinstallprompt).
// - iOS Safari: toast nativo (sonner) com instrução Compartilhar → Adicionar à Tela de Início.

import { toast } from "sonner";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const IOS_HINT_KEY = "pwa-ios-hint-shown";
const INSTALLED_KEY = "pwa-installed";
const ENTRY_DELAY_MS = 2000;

function isStandalone(): boolean {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function isIOS(): boolean {
  const ua = window.navigator.userAgent;
  const isIOSDevice = /iPad|iPhone|iPod/.test(ua) && !(window as unknown as { MSStream?: unknown }).MSStream;
  // iPadOS 13+ reports as Mac; detect via touch
  const isIPadOS = ua.includes("Mac") && "ontouchend" in document;
  return isIOSDevice || isIPadOS;
}

function isInIframe(): boolean {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

export function initPwaInstall() {
  if (typeof window === "undefined") return;
  if (isInIframe()) return; // não atrapalhar preview do editor
  if (isStandalone()) return;
  if (localStorage.getItem(INSTALLED_KEY) === "1") return;

  let deferredPrompt: BeforeInstallPromptEvent | null = null;
  let shown = false;
  let entryElapsed = false;

  const cleanupExitIntent = () => {
    document.removeEventListener("mouseout", onMouseOut, true);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("touchend", onGesture, true);
    window.removeEventListener("click", onGesture, true);
  };

  const showInstall = async () => {
    if (shown) return;

    // iOS Safari — sem API de prompt; dica nativa via toast (1x)
    if (isIOS()) {
      if (localStorage.getItem(IOS_HINT_KEY)) return;
      shown = true;
      localStorage.setItem(IOS_HINT_KEY, "1");
      toast("Instale o app na tela inicial", {
        description: 'Toque em Compartilhar e depois em "Adicionar à Tela de Início".',
        duration: 8000,
      });
      cleanupExitIntent();
      return;
    }

    if (!deferredPrompt) return;
    shown = true;
    const prompt = deferredPrompt;
    deferredPrompt = null;
    try {
      await prompt.prompt();
      const choice = await prompt.userChoice;
      if (choice.outcome === "accepted") localStorage.setItem(INSTALLED_KEY, "1");
      cleanupExitIntent();
    } catch {
      // navegador exigiu gesto do usuário — tenta novamente no próximo gatilho
      shown = false;
      deferredPrompt = prompt;
    }
  };

  // (2) Intenção de sair: mouse deixando a viewport pela parte superior
  function onMouseOut(e: MouseEvent) {
    if (!entryElapsed) return;
    if (e.relatedTarget || (e as unknown as { toElement?: unknown }).toElement) return;
    if (e.clientY > 12) return;
    void showInstall();
  }

  // (2b) Aba oculta/troca de aba conta como intenção de sair (mobile incluso)
  function onVisibility() {
    if (document.visibilityState === "hidden") return;
    // ao voltar para a aba, tenta exibir
    if (entryElapsed) void showInstall();
  }

  // Fallback: qualquer gesto do usuário após o delay (Chrome pode exigir gesto)
  function onGesture() {
    if (entryElapsed) void showInstall();
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });

  window.addEventListener("appinstalled", () => {
    localStorage.setItem(INSTALLED_KEY, "1");
    deferredPrompt = null;
    cleanupExitIntent();
  });

  // (1) 2 segundos após a entrada
  window.setTimeout(() => {
    entryElapsed = true;
    void showInstall();
    document.addEventListener("mouseout", onMouseOut, true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("touchend", onGesture, true);
    window.addEventListener("click", onGesture, true);
  }, ENTRY_DELAY_MS);
}
