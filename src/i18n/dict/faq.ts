const dict = {
  pt: {
    seoTitle: "FAQ - Perguntas Frequentes | Baixar Vídeo YouTube",
    seoDescription: "Encontre respostas para as perguntas mais frequentes sobre como baixar vídeos do YouTube em MP4, MP3, 4K e outros formatos. Tire todas as suas dúvidas.",
    breadcrumbHome: "Início",
    breadcrumbFaq: "FAQ",
    badge: "Central de Ajuda",
    heroTitlePrefix: "Perguntas",
    heroTitleHighlight: "Frequentes",
    heroSubtitle: "Encontre respostas rápidas para as dúvidas mais comuns sobre download de vídeos, áudio e playlists do YouTube.",
    searchSrLabel: "Buscar pergunta na central de ajuda",
    searchPlaceholder: "Buscar pergunta...",
    searchAriaLabel: "Buscar pergunta na central de ajuda",
    noResults: 'Nenhuma pergunta encontrada para "{term}"',
    categories: [
      {
        category: "Download de Vídeos",
        items: [
          { question: "Como baixar vídeo do YouTube grátis?", answer: "Basta copiar o link do vídeo do YouTube, colar na barra de pesquisa do nosso site e clicar em 'Baixar Vídeo'. Em segundos, você verá as opções de qualidade disponíveis para download. Todo o processo é 100% gratuito e sem necessidade de cadastro." },
          { question: "Como baixar vídeo do YouTube em MP4?", answer: "Após colar o link do vídeo, nosso sistema exibe automaticamente as opções em formato MP4 com diferentes resoluções (360p, 480p, 720p, 1080p, 4K). Selecione a qualidade desejada e clique no botão de download para salvar o arquivo MP4 no seu dispositivo." },
          { question: "Como baixar vídeo do YouTube em 4K?", answer: "Cole o link do vídeo na nossa plataforma. Se o vídeo original estiver disponível em 4K (2160p), essa opção aparecerá na lista de formatos. Clique em 'Baixar' ao lado da opção 4K para obter o vídeo na mais alta qualidade disponível." },
          { question: "Como baixar vídeo do YouTube em 1080p Full HD?", answer: "Após inserir o link, selecione a opção '1080p' na lista de formatos disponíveis. O formato MP4 com codec H.264 é o mais compatível com todos os dispositivos e players de vídeo." },
          { question: "É possível baixar vídeos em 8K?", answer: "Sim, se o vídeo original no YouTube estiver disponível em 8K (4320p), nosso sistema detectará essa resolução e a oferecerá como opção de download. Vídeos em 8K são ideais para telas de altíssima resolução." },
          { question: "Qual a diferença entre MP4 e WebM?", answer: "MP4 (H.264) é o formato mais universal, compatível com praticamente todos os dispositivos e players. WebM (VP9) oferece melhor compressão com qualidade similar, mas pode não ser compatível com alguns dispositivos mais antigos. Recomendamos MP4 para maior compatibilidade." },
        ],
      },
      {
        category: "Download de Áudio/MP3",
        items: [
          { question: "Como converter vídeo do YouTube para MP3?", answer: "Cole o link do vídeo do YouTube no nosso site e clique em 'Baixar'. Na lista de formatos, selecione a opção 'MP3' com a qualidade desejada (128kbps, 192kbps ou 320kbps). O áudio será extraído automaticamente do vídeo e disponibilizado para download." },
          { question: "Qual a melhor qualidade de MP3 disponível?", answer: "Oferecemos download de áudio MP3 em até 320kbps, que é a qualidade máxima para o formato MP3. Também disponibilizamos o formato M4A (AAC), que oferece qualidade superior ao MP3 com tamanho de arquivo similar." },
          { question: "Posso baixar apenas o áudio de um vídeo?", answer: "Sim! Nossa plataforma permite extrair e baixar apenas o áudio de qualquer vídeo do YouTube. Basta colar o link e escolher um dos formatos de áudio disponíveis (MP3 ou M4A) na lista de opções." },
          { question: "Qual a diferença entre MP3 e M4A?", answer: "MP3 é o formato de áudio mais popular e compatível universalmente. M4A (AAC) oferece qualidade de áudio ligeiramente superior ao MP3 no mesmo bitrate, sendo o formato padrão do iTunes e dispositivos Apple. Ambos são amplamente suportados." },
        ],
      },
      {
        category: "YouTube Shorts",
        items: [
          { question: "Como baixar YouTube Shorts?", answer: "O processo é idêntico ao download de vídeos normais. Copie o link do Short (que contém '/shorts/' na URL), cole na nossa barra de pesquisa e clique em 'Baixar'. Os formatos disponíveis serão exibidos para você escolher." },
          { question: "Shorts são baixados em formato vertical?", answer: "Sim, os YouTube Shorts são baixados exatamente como foram publicados, mantendo o formato vertical (9:16) original. A qualidade e resolução do vídeo são preservadas integralmente." },
          { question: "Posso converter Shorts para MP3?", answer: "Sim! Assim como qualquer outro vídeo do YouTube, você pode extrair o áudio de um Short e salvá-lo como MP3 ou M4A. Basta selecionar o formato de áudio desejado na lista de opções." },
        ],
      },
      {
        category: "Playlists e Canais",
        items: [
          { question: "Como baixar uma playlist inteira do YouTube?", answer: "Cole o link da playlist na barra de pesquisa. Nosso sistema detectará automaticamente que se trata de uma playlist e exibirá os vídeos disponíveis. Você pode baixar os vídeos individualmente selecionando a qualidade desejada para cada um." },
          { question: "Posso baixar todos os vídeos de um canal?", answer: "Sim, acesse a seção 'Canais', insira o link do canal do YouTube e visualize todos os vídeos disponíveis. Você pode selecionar e baixar os vídeos de seu interesse individualmente." },
          { question: "Existe limite de downloads por playlist?", answer: "Não há limite de downloads. Você pode baixar quantos vídeos quiser de qualquer playlist, quantas vezes precisar. Nosso serviço é 100% gratuito e ilimitado." },
        ],
      },
      {
        category: "Compatibilidade e Dispositivos",
        items: [
          { question: "Funciona no celular Android?", answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em qualquer navegador Android (Chrome, Firefox, Samsung Internet, etc.). Basta acessar o site, colar o link e baixar. Não é necessário instalar nenhum aplicativo." },
          { question: "Funciona no iPhone/iPad?", answer: "Sim, funciona em dispositivos iOS. Acesse nosso site pelo Safari ou qualquer outro navegador. Em versões mais recentes do iOS, o download é feito diretamente. Em versões anteriores, pode ser necessário usar um gerenciador de arquivos." },
          { question: "Funciona no computador (PC/Mac)?", answer: "Sim, funciona em qualquer computador com navegador web moderno (Chrome, Firefox, Safari, Edge, Opera). Basta acessar o site, colar o link do vídeo e escolher o formato desejado para download." },
          { question: "Preciso instalar algum programa ou extensão?", answer: "Não! Nosso serviço funciona 100% online, direto do navegador. Não é necessário instalar programas, extensões, plugins ou aplicativos. Basta acessar o site e começar a baixar." },
          { question: "Os vídeos baixados funcionam em Smart TVs?", answer: "Sim, os vídeos em formato MP4 (H.264) são compatíveis com a maioria das Smart TVs. Recomendamos baixar neste formato para garantir a máxima compatibilidade. Você pode transferir os arquivos via USB ou pela rede local." },
        ],
      },
      {
        category: "Segurança e Privacidade",
        items: [
          { question: "O site é seguro para usar?", answer: "Sim, absolutamente seguro. Utilizamos conexão criptografada SSL/TLS (HTTPS) em todas as páginas. Não armazenamos dados pessoais, não exigimos cadastro e não instalamos nenhum software no seu dispositivo. Sua privacidade é nossa prioridade." },
          { question: "Preciso criar conta ou fazer login?", answer: "Não, nosso serviço não requer nenhum tipo de cadastro, login ou informação pessoal. Você pode começar a baixar vídeos imediatamente, sem fornecer e-mail, nome ou qualquer outro dado." },
          { question: "O site tem vírus ou malware?", answer: "Não. Nosso site é limpo e seguro, sem pop-ups maliciosos, redirecionamentos suspeitos ou downloads automáticos. Não utilizamos adware, spyware ou qualquer tipo de software prejudicial." },
          { question: "Meus dados são armazenados?", answer: "Não armazenamos nenhum dado pessoal. Não coletamos informações de identificação, histórico de downloads ou links pesquisados. Utilizamos apenas cookies essenciais para o funcionamento do site. Consulte nossa Política de Privacidade para mais detalhes." },
        ],
      },
      {
        category: "Questões Legais",
        items: [
          { question: "É legal baixar vídeos do YouTube?", answer: "O download de vídeos para uso pessoal e privado geralmente é aceito em muitas jurisdições. No entanto, redistribuir, comercializar ou reutilizar conteúdo protegido por direitos autorais sem autorização é ilegal. Recomendamos baixar apenas conteúdo de domínio público, Creative Commons ou com autorização do criador." },
          { question: "Posso usar os vídeos baixados comercialmente?", answer: "Não, a menos que o vídeo esteja sob licença Creative Commons que permita uso comercial, ou que você tenha autorização expressa do criador do conteúdo. O uso comercial não autorizado pode resultar em violação de direitos autorais." },
          { question: "O que acontece se eu baixar conteúdo com copyright?", answer: "O download para visualização pessoal e offline geralmente é tolerado. Porém, distribuir, publicar ou monetizar conteúdo protegido constitui violação de direitos autorais e pode resultar em consequências legais. Sempre respeite os direitos dos criadores." },
        ],
      },
      {
        category: "Problemas Técnicos",
        items: [
          { question: "O download não está funcionando, o que fazer?", answer: "Verifique se o link está correto e completo. Tente atualizar a página e colar o link novamente. Se o problema persistir, o vídeo pode ter restrições geográficas ou de idade. Tente com outro vídeo para confirmar se o serviço está operando normalmente." },
          { question: "O vídeo baixou sem som, como resolver?", answer: "Isso pode acontecer com vídeos em resoluções muito altas (4K/8K) que usam streams separados de áudio e vídeo. Tente baixar em uma resolução menor (1080p ou 720p) no formato MP4, que geralmente inclui áudio e vídeo combinados." },
          { question: "O download está muito lento, o que fazer?", answer: "A velocidade de download depende da sua conexão de internet e do tamanho do arquivo. Vídeos em 4K/8K são significativamente maiores. Tente baixar em uma resolução menor para downloads mais rápidos, ou verifique sua conexão de internet." },
          { question: "Por que alguns vídeos não estão disponíveis?", answer: "Alguns vídeos podem ter restrições de país, idade ou privacidade definidas pelo criador. Vídeos privados, não listados com restrições ou removidos não podem ser baixados. Vídeos com DRM (proteção digital) também podem não estar disponíveis." },
        ],
      },
    ],
  },
  en: {
    seoTitle: "FAQ - Frequently Asked Questions | Download YouTube Video",
    seoDescription: "Find answers to the most frequently asked questions about how to download YouTube videos in MP4, MP3, 4K and other formats. Get all your questions answered.",
    breadcrumbHome: "Home",
    breadcrumbFaq: "FAQ",
    badge: "Help Center",
    heroTitlePrefix: "Frequently Asked",
    heroTitleHighlight: "Questions",
    heroSubtitle: "Find quick answers to the most common questions about downloading YouTube videos, audio and playlists.",
    searchSrLabel: "Search a question in the help center",
    searchPlaceholder: "Search a question...",
    searchAriaLabel: "Search a question in the help center",
    noResults: 'No question found for "{term}"',
    categories: [
      {
        category: "Video Downloads",
        items: [
          { question: "How to download YouTube videos for free?", answer: "Just copy the YouTube video link, paste it into our site's search bar and click 'Download Video'. In seconds, you'll see the available quality options for download. The whole process is 100% free and requires no sign-up." },
          { question: "How to download YouTube videos in MP4?", answer: "After pasting the video link, our system automatically displays MP4 options with different resolutions (360p, 480p, 720p, 1080p, 4K). Select the desired quality and click the download button to save the MP4 file to your device." },
          { question: "How to download YouTube videos in 4K?", answer: "Paste the video link on our platform. If the original video is available in 4K (2160p), that option will appear in the format list. Click 'Download' next to the 4K option to get the video in the highest quality available." },
          { question: "How to download YouTube videos in 1080p Full HD?", answer: "After entering the link, select the '1080p' option from the list of available formats. The MP4 format with H.264 codec is the most compatible with all devices and video players." },
          { question: "Is it possible to download videos in 8K?", answer: "Yes, if the original YouTube video is available in 8K (4320p), our system will detect that resolution and offer it as a download option. 8K videos are ideal for ultra-high-resolution screens." },
          { question: "What's the difference between MP4 and WebM?", answer: "MP4 (H.264) is the most universal format, compatible with virtually all devices and players. WebM (VP9) offers better compression with similar quality, but may not be compatible with some older devices. We recommend MP4 for maximum compatibility." },
        ],
      },
      {
        category: "Audio/MP3 Downloads",
        items: [
          { question: "How to convert a YouTube video to MP3?", answer: "Paste the YouTube video link on our site and click 'Download'. In the format list, select the 'MP3' option with the desired quality (128kbps, 192kbps or 320kbps). The audio will be automatically extracted from the video and made available for download." },
          { question: "What's the best MP3 quality available?", answer: "We offer MP3 audio downloads up to 320kbps, the maximum quality for the MP3 format. We also offer the M4A (AAC) format, which delivers better quality than MP3 at a similar file size." },
          { question: "Can I download only the audio from a video?", answer: "Yes! Our platform lets you extract and download just the audio from any YouTube video. Simply paste the link and choose one of the available audio formats (MP3 or M4A) from the list of options." },
          { question: "What's the difference between MP3 and M4A?", answer: "MP3 is the most popular and universally compatible audio format. M4A (AAC) offers slightly better audio quality than MP3 at the same bitrate, and is the default format for iTunes and Apple devices. Both are widely supported." },
        ],
      },
      {
        category: "YouTube Shorts",
        items: [
          { question: "How to download YouTube Shorts?", answer: "The process is identical to downloading regular videos. Copy the Short's link (which contains '/shorts/' in the URL), paste it into our search bar and click 'Download'. The available formats will be displayed for you to choose from." },
          { question: "Are Shorts downloaded in vertical format?", answer: "Yes, YouTube Shorts are downloaded exactly as they were published, keeping the original vertical (9:16) format. Video quality and resolution are fully preserved." },
          { question: "Can I convert Shorts to MP3?", answer: "Yes! Just like any other YouTube video, you can extract the audio from a Short and save it as MP3 or M4A. Simply select the desired audio format from the list of options." },
        ],
      },
      {
        category: "Playlists and Channels",
        items: [
          { question: "How to download an entire YouTube playlist?", answer: "Paste the playlist link into the search bar. Our system will automatically detect that it's a playlist and display the available videos. You can download each video individually by selecting the desired quality." },
          { question: "Can I download all the videos from a channel?", answer: "Yes, go to the 'Channels' section, enter the YouTube channel link and view all available videos. You can select and download the videos you're interested in individually." },
          { question: "Is there a download limit per playlist?", answer: "There's no download limit. You can download as many videos as you want from any playlist, as many times as needed. Our service is 100% free and unlimited." },
        ],
      },
      {
        category: "Compatibility and Devices",
        items: [
          { question: "Does it work on Android phones?", answer: "Yes! Our platform is fully responsive and works perfectly in any Android browser (Chrome, Firefox, Samsung Internet, etc.). Just visit the site, paste the link and download. No app installation required." },
          { question: "Does it work on iPhone/iPad?", answer: "Yes, it works on iOS devices. Access our site via Safari or any other browser. On newer iOS versions, the download happens directly. On older versions, you may need to use a file manager." },
          { question: "Does it work on computers (PC/Mac)?", answer: "Yes, it works on any computer with a modern web browser (Chrome, Firefox, Safari, Edge, Opera). Just visit the site, paste the video link and choose the desired format for download." },
          { question: "Do I need to install any program or extension?", answer: "No! Our service works 100% online, directly from the browser. There's no need to install programs, extensions, plugins or apps. Just visit the site and start downloading." },
          { question: "Do downloaded videos work on Smart TVs?", answer: "Yes, videos in MP4 (H.264) format are compatible with most Smart TVs. We recommend downloading in this format to ensure maximum compatibility. You can transfer files via USB or local network." },
        ],
      },
      {
        category: "Security and Privacy",
        items: [
          { question: "Is the site safe to use?", answer: "Yes, absolutely safe. We use encrypted SSL/TLS (HTTPS) connections on all pages. We don't store personal data, don't require sign-up and don't install any software on your device. Your privacy is our priority." },
          { question: "Do I need to create an account or log in?", answer: "No, our service doesn't require any kind of sign-up, login or personal information. You can start downloading videos immediately, without providing an email, name or any other data." },
          { question: "Does the site have viruses or malware?", answer: "No. Our site is clean and safe, with no malicious pop-ups, suspicious redirects or automatic downloads. We don't use adware, spyware or any kind of harmful software." },
          { question: "Is my data stored?", answer: "We don't store any personal data. We don't collect identifying information, download history or searched links. We only use essential cookies for the site to function. Check our Privacy Policy for more details." },
        ],
      },
      {
        category: "Legal Questions",
        items: [
          { question: "Is it legal to download YouTube videos?", answer: "Downloading videos for personal and private use is generally accepted in many jurisdictions. However, redistributing, selling or reusing copyrighted content without authorization is illegal. We recommend downloading only public domain, Creative Commons, or creator-authorized content." },
          { question: "Can I use downloaded videos commercially?", answer: "No, unless the video is under a Creative Commons license that permits commercial use, or you have express authorization from the content creator. Unauthorized commercial use can result in copyright infringement." },
          { question: "What happens if I download copyrighted content?", answer: "Downloading for personal, offline viewing is generally tolerated. However, distributing, publishing or monetizing protected content constitutes copyright infringement and can result in legal consequences. Always respect creators' rights." },
        ],
      },
      {
        category: "Technical Issues",
        items: [
          { question: "The download isn't working, what should I do?", answer: "Check that the link is correct and complete. Try refreshing the page and pasting the link again. If the problem persists, the video may have geographic or age restrictions. Try another video to confirm the service is working normally." },
          { question: "The video downloaded without sound, how do I fix it?", answer: "This can happen with very high resolution videos (4K/8K) that use separate audio and video streams. Try downloading a lower resolution (1080p or 720p) in MP4 format, which usually includes combined audio and video." },
          { question: "The download is very slow, what should I do?", answer: "Download speed depends on your internet connection and file size. 4K/8K videos are significantly larger. Try downloading a lower resolution for faster downloads, or check your internet connection." },
          { question: "Why are some videos unavailable?", answer: "Some videos may have country, age or privacy restrictions set by the creator. Private, restricted unlisted or removed videos cannot be downloaded. Videos with DRM (digital protection) may also be unavailable." },
        ],
      },
    ],
  },
  es: {
    seoTitle: "FAQ - Preguntas Frecuentes | Descargar Video de YouTube",
    seoDescription: "Encuentra respuestas a las preguntas más frecuentes sobre cómo descargar videos de YouTube en MP4, MP3, 4K y otros formatos. Resuelve todas tus dudas.",
    breadcrumbHome: "Inicio",
    breadcrumbFaq: "FAQ",
    badge: "Centro de Ayuda",
    heroTitlePrefix: "Preguntas",
    heroTitleHighlight: "Frecuentes",
    heroSubtitle: "Encuentra respuestas rápidas a las dudas más comunes sobre la descarga de videos, audio y listas de reproducción de YouTube.",
    searchSrLabel: "Buscar pregunta en el centro de ayuda",
    searchPlaceholder: "Buscar pregunta...",
    searchAriaLabel: "Buscar pregunta en el centro de ayuda",
    noResults: 'No se encontraron preguntas para "{term}"',
    categories: [
      {
        category: "Descarga de Videos",
        items: [
          { question: "¿Cómo descargar video de YouTube gratis?", answer: "Solo copia el enlace del video de YouTube, pégalo en la barra de búsqueda de nuestro sitio y haz clic en 'Descargar Video'. En segundos verás las opciones de calidad disponibles para descargar. Todo el proceso es 100% gratuito y no requiere registro." },
          { question: "¿Cómo descargar video de YouTube en MP4?", answer: "Después de pegar el enlace del video, nuestro sistema muestra automáticamente las opciones en formato MP4 con diferentes resoluciones (360p, 480p, 720p, 1080p, 4K). Selecciona la calidad deseada y haz clic en el botón de descarga para guardar el archivo MP4 en tu dispositivo." },
          { question: "¿Cómo descargar video de YouTube en 4K?", answer: "Pega el enlace del video en nuestra plataforma. Si el video original está disponible en 4K (2160p), esa opción aparecerá en la lista de formatos. Haz clic en 'Descargar' junto a la opción 4K para obtener el video en la más alta calidad disponible." },
          { question: "¿Cómo descargar video de YouTube en 1080p Full HD?", answer: "Después de ingresar el enlace, selecciona la opción '1080p' en la lista de formatos disponibles. El formato MP4 con códec H.264 es el más compatible con todos los dispositivos y reproductores de video." },
          { question: "¿Es posible descargar videos en 8K?", answer: "Sí, si el video original de YouTube está disponible en 8K (4320p), nuestro sistema detectará esa resolución y la ofrecerá como opción de descarga. Los videos en 8K son ideales para pantallas de altísima resolución." },
          { question: "¿Cuál es la diferencia entre MP4 y WebM?", answer: "MP4 (H.264) es el formato más universal, compatible con prácticamente todos los dispositivos y reproductores. WebM (VP9) ofrece mejor compresión con calidad similar, pero puede no ser compatible con algunos dispositivos más antiguos. Recomendamos MP4 para mayor compatibilidad." },
        ],
      },
      {
        category: "Descarga de Audio/MP3",
        items: [
          { question: "¿Cómo convertir un video de YouTube a MP3?", answer: "Pega el enlace del video de YouTube en nuestro sitio y haz clic en 'Descargar'. En la lista de formatos, selecciona la opción 'MP3' con la calidad deseada (128kbps, 192kbps o 320kbps). El audio se extraerá automáticamente del video y estará disponible para descargar." },
          { question: "¿Cuál es la mejor calidad de MP3 disponible?", answer: "Ofrecemos descarga de audio MP3 hasta 320kbps, que es la calidad máxima para el formato MP3. También ofrecemos el formato M4A (AAC), que brinda una calidad superior al MP3 con un tamaño de archivo similar." },
          { question: "¿Puedo descargar solo el audio de un video?", answer: "¡Sí! Nuestra plataforma permite extraer y descargar solo el audio de cualquier video de YouTube. Solo pega el enlace y elige uno de los formatos de audio disponibles (MP3 o M4A) en la lista de opciones." },
          { question: "¿Cuál es la diferencia entre MP3 y M4A?", answer: "MP3 es el formato de audio más popular y universalmente compatible. M4A (AAC) ofrece una calidad de audio ligeramente superior al MP3 con el mismo bitrate, y es el formato predeterminado de iTunes y los dispositivos Apple. Ambos son ampliamente compatibles." },
        ],
      },
      {
        category: "YouTube Shorts",
        items: [
          { question: "¿Cómo descargar YouTube Shorts?", answer: "El proceso es idéntico al de descargar videos normales. Copia el enlace del Short (que contiene '/shorts/' en la URL), pégalo en nuestra barra de búsqueda y haz clic en 'Descargar'. Se mostrarán los formatos disponibles para que elijas." },
          { question: "¿Los Shorts se descargan en formato vertical?", answer: "Sí, los YouTube Shorts se descargan exactamente como fueron publicados, manteniendo el formato vertical (9:16) original. La calidad y resolución del video se conservan íntegramente." },
          { question: "¿Puedo convertir Shorts a MP3?", answer: "¡Sí! Al igual que cualquier otro video de YouTube, puedes extraer el audio de un Short y guardarlo como MP3 o M4A. Solo selecciona el formato de audio deseado en la lista de opciones." },
        ],
      },
      {
        category: "Listas de reproducción y canales",
        items: [
          { question: "¿Cómo descargar una lista de reproducción completa de YouTube?", answer: "Pega el enlace de la lista de reproducción en la barra de búsqueda. Nuestro sistema detectará automáticamente que se trata de una lista y mostrará los videos disponibles. Puedes descargar los videos individualmente seleccionando la calidad deseada para cada uno." },
          { question: "¿Puedo descargar todos los videos de un canal?", answer: "Sí, accede a la sección 'Canales', ingresa el enlace del canal de YouTube y visualiza todos los videos disponibles. Puedes seleccionar y descargar los videos de tu interés individualmente." },
          { question: "¿Existe un límite de descargas por lista de reproducción?", answer: "No hay límite de descargas. Puedes descargar todos los videos que quieras de cualquier lista de reproducción, tantas veces como necesites. Nuestro servicio es 100% gratuito e ilimitado." },
        ],
      },
      {
        category: "Compatibilidad y Dispositivos",
        items: [
          { question: "¿Funciona en celulares Android?", answer: "¡Sí! Nuestra plataforma es totalmente responsiva y funciona perfectamente en cualquier navegador Android (Chrome, Firefox, Samsung Internet, etc.). Solo accede al sitio, pega el enlace y descarga. No es necesario instalar ninguna aplicación." },
          { question: "¿Funciona en iPhone/iPad?", answer: "Sí, funciona en dispositivos iOS. Accede a nuestro sitio con Safari o cualquier otro navegador. En las versiones más recientes de iOS, la descarga se realiza directamente. En versiones anteriores, puede ser necesario usar un gestor de archivos." },
          { question: "¿Funciona en computadoras (PC/Mac)?", answer: "Sí, funciona en cualquier computadora con navegador web moderno (Chrome, Firefox, Safari, Edge, Opera). Solo accede al sitio, pega el enlace del video y elige el formato deseado para descargar." },
          { question: "¿Necesito instalar algún programa o extensión?", answer: "¡No! Nuestro servicio funciona 100% en línea, directamente desde el navegador. No es necesario instalar programas, extensiones, plugins o aplicaciones. Solo accede al sitio y comienza a descargar." },
          { question: "¿Los videos descargados funcionan en Smart TVs?", answer: "Sí, los videos en formato MP4 (H.264) son compatibles con la mayoría de las Smart TVs. Recomendamos descargar en este formato para garantizar la máxima compatibilidad. Puedes transferir los archivos vía USB o red local." },
        ],
      },
      {
        category: "Seguridad y Privacidad",
        items: [
          { question: "¿El sitio es seguro para usar?", answer: "Sí, absolutamente seguro. Utilizamos conexión cifrada SSL/TLS (HTTPS) en todas las páginas. No almacenamos datos personales, no exigimos registro y no instalamos ningún software en tu dispositivo. Tu privacidad es nuestra prioridad." },
          { question: "¿Necesito crear una cuenta o iniciar sesión?", answer: "No, nuestro servicio no requiere ningún tipo de registro, inicio de sesión o información personal. Puedes empezar a descargar videos de inmediato, sin proporcionar correo electrónico, nombre ni ningún otro dato." },
          { question: "¿El sitio tiene virus o malware?", answer: "No. Nuestro sitio es limpio y seguro, sin ventanas emergentes maliciosas, redirecciones sospechosas o descargas automáticas. No utilizamos adware, spyware ni ningún tipo de software dañino." },
          { question: "¿Se almacenan mis datos?", answer: "No almacenamos ningún dato personal. No recopilamos información de identificación, historial de descargas ni enlaces buscados. Solo utilizamos cookies esenciales para el funcionamiento del sitio. Consulta nuestra Política de Privacidad para más detalles." },
        ],
      },
      {
        category: "Cuestiones Legales",
        items: [
          { question: "¿Es legal descargar videos de YouTube?", answer: "La descarga de videos para uso personal y privado generalmente es aceptada en muchas jurisdicciones. Sin embargo, redistribuir, comercializar o reutilizar contenido protegido por derechos de autor sin autorización es ilegal. Recomendamos descargar solo contenido de dominio público, Creative Commons o con autorización del creador." },
          { question: "¿Puedo usar los videos descargados comercialmente?", answer: "No, a menos que el video esté bajo una licencia Creative Commons que permita el uso comercial, o que tengas autorización expresa del creador del contenido. El uso comercial no autorizado puede constituir una infracción de derechos de autor." },
          { question: "¿Qué pasa si descargo contenido con derechos de autor?", answer: "La descarga para visualización personal y sin conexión generalmente es tolerada. Sin embargo, distribuir, publicar o monetizar contenido protegido constituye una infracción de derechos de autor y puede tener consecuencias legales. Respeta siempre los derechos de los creadores." },
        ],
      },
      {
        category: "Problemas Técnicos",
        items: [
          { question: "La descarga no está funcionando, ¿qué hago?", answer: "Verifica que el enlace sea correcto y completo. Intenta actualizar la página y pegar el enlace nuevamente. Si el problema persiste, el video puede tener restricciones geográficas o de edad. Prueba con otro video para confirmar si el servicio está funcionando con normalidad." },
          { question: "El video se descargó sin sonido, ¿cómo lo soluciono?", answer: "Esto puede ocurrir con videos en resoluciones muy altas (4K/8K) que usan flujos separados de audio y video. Intenta descargar en una resolución menor (1080p o 720p) en formato MP4, que generalmente incluye audio y video combinados." },
          { question: "La descarga está muy lenta, ¿qué hago?", answer: "La velocidad de descarga depende de tu conexión a internet y del tamaño del archivo. Los videos en 4K/8K son significativamente más grandes. Intenta descargar en una resolución menor para descargas más rápidas, o verifica tu conexión a internet." },
          { question: "¿Por qué algunos videos no están disponibles?", answer: "Algunos videos pueden tener restricciones de país, edad o privacidad definidas por el creador. Los videos privados, no listados con restricciones o eliminados no se pueden descargar. Los videos con DRM (protección digital) también pueden no estar disponibles." },
        ],
      },
    ],
  },
} as const;

export default dict;
