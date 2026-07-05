// Prerenders each SPA route to a static index.html for SEO.
// Runs after `vite build`. Fail-safe: never breaks the build.
// Layout is guaranteed identical — this is a snapshot of the rendered app.

import { preview } from "vite";
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROUTES = [
  "/",
  "/videos",
  "/shorts",
  "/audio",
  "/playlist",
  "/canais",
  "/downloads",
  "/faq",
  "/sobre",
  "/contato",
  "/uso-responsavel",
  "/privacidade",
  "/termos",
  "/cookies",
  "/dmca",
];

const PORT = 4173;

async function run() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    try {
      ({ chromium } = await import("@playwright/test"));
    } catch (e) {
      console.warn("[prerender] Playwright not available — skipping prerender (build not affected).");
      return;
    }
  }

  const server = await preview({
    preview: { port: PORT, strictPort: false, host: "127.0.0.1" },
  });
  const address = server.httpServer.address();
  const port = typeof address === "object" && address ? address.port : PORT;
  const base = `http://127.0.0.1:${port}`;

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (e) {
    console.warn("[prerender] Chromium unavailable — skipping prerender:", e?.message || e);
    server.httpServer.close();
    return;
  }

  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    const page = await ctx.newPage();
    try {
      await page.goto(base + route, { waitUntil: "networkidle", timeout: 20000 });
      // Give framer-motion + effects a beat to settle
      await page.waitForTimeout(400);
      const html = await page.content();
      const outPath =
        route === "/"
          ? resolve("dist/index.html")
          : resolve(`dist${route}/index.html`);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, "utf8");
      ok++;
      console.log(`[prerender] ✓ ${route}`);
    } catch (e) {
      fail++;
      console.warn(`[prerender] ✗ ${route}:`, e?.message || e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();
  console.log(`[prerender] done — ${ok} ok, ${fail} failed`);
}

run().catch((err) => {
  console.warn("[prerender] fatal (ignored):", err?.message || err);
  process.exit(0);
});
