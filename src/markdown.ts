import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

const file = async (fp:string) => { const d = new TextDecoder("utf-8"); try { return d.decode(await Deno.readFile(fp))} catch { return d.decode(await Deno.readFile("./src/404.md")) }}

export const md = async (src: string) => {
    const title = src.replace(/\/.*\//gmis, "")[0].toUpperCase() + src.replace(/\/.*\//gmis, "").slice(1);
    return `
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

      <!-- Primary Meta Tags -->
      <title>${title} | LTX — your one stop shop for everything space</title>
      <meta name="title" content="${title} | LTX — your one stop shop for everything space">
      <meta name="description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://ltx.deno.dev/">
      <meta property="og:title" content="${title} | LTX — your one stop shop for everything space">
      <meta property="og:description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">
      <meta property="og:image" content="/bin/cover.svg">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://ltx.deno.dev/">
      <meta property="twitter:title" content="${title} | LTX — your one stop shop for everything space">
      <meta property="twitter:description" content="Learn about everything from Mars to rocket engines, watch a launch from a bunch of different views, and more.">
      <meta property="twitter:image" content="/bin/cover.svg">

      <link rel="icon" href="/bin/logo.svg" type="image/svg+xml">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:ital@0;1&display=swap" rel="stylesheet">
      <style>
      html {
        background-color: #101010;
      }

      main {
          position: absolute;
          left: 0;
          top: 0;
          width: 100% !important;
          height: auto;
          min-height: 100%;

          overflow: hidden;

          display: grid; 
          grid-template-columns: 1fr; 
          grid-template-rows: 1fr 11fr; 
          gap: 0px 0px; 
          grid-template-areas: 
              "header"
              "content";


          background-color: #101010;
      }

      .header {
          grid-area: header;

          position: sticky;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          z-index: 1;

          background-color: #101010;
      }

      .content {
          grid-area: content;

          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          z-index: 0;

          overflow-y: scroll;
          padding-bottom: 2rem;
      }


      #logo {
          user-select: none;

          position: absolute;
          top: 50%;
          left: 1.25rem;
          transform: translateY(-50%);
      }

      #menu-toggle {
          user-select: none;

          position: absolute;
          top: 50%;
          right: 1.25rem;
          transform: translateY(-50%);
          z-index: 2;

          cursor: pointer;
      }

      #menu-close {
          visibility: hidden;

          opacity: 0%;
          transition: opacity 150ms ease-in-out;

          width: 100%;
          height: 100%;

          position: fixed;
          left: 0;
          top: 0;
          z-index: 0;

          background-color: rgba(0, 0, 0, 0.35);
      }

      #menu {
          width: 0rem;
          height: 100%;

          position: fixed;
          top: 0;
          right: 0;
          z-index: 1;

          background-color: #151515;
          border-left: -3px solid #212121;

          transition: width 250ms ease-in-out;
      }

      #menu-content {
          visibility: hidden;
          opacity: 0%;
          transition: opacity 150ms ease-in-out;

          width: calc(100% - (1.25em * 2));
          height: calc(100% - (1/12 * 100%) - 1.25em);

          position: absolute;
          top: calc(1/12 * 100%);
          left: 50%;
          transform: translateX(-50%);

          text-align: right;
      }

      #menu-content a {
          user-select: none;
          
          text-decoration: none;
          color: #f0f0f0;
          font-size: var(--menu-link);

          z-index: 2;

          cursor: pointer;

          transition: color 200ms ease-in-out;

          font-family: Roboto Mono;
      }

      #menu-content a:hover {
          color: #ff9a51;
      }

      .menu-content-bottom {
          position: absolute;
          right: 0;
          bottom: 0;
      }

      @media only screen and (orientation: landscape) and (max-width: 1000px) {
          :root {
              --menu-link: 1.75rem;
              --content-catchphrase: 2.5rem;
              --content-description: 1rem;
              --tagline: 0.65rem;
          }

          #logo {
              height: 65%;
          }

          #menu-toggle {
              height: 25%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 3.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 2.25rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          table {
            border-color: #212121;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            color: #e0e0e0;
            font-size: 1.25rem;
            font-family: Roboto Mono;
            background-color: #151515;
            padding: 0.25rem;
            border-radius: 5px;
          }

          img {
            max-width: calc(100% - 4rem);
          }
      }

      @media only screen and (orientation: portrait) and (max-width: 1000px) {
          :root {
              --menu-link: 1.75rem;
              --content-catchphrase: 2.5rem;
              --content-description: 1rem;
              --tagline: 0.65rem;
          }

          #logo {
              height: 65%;
          }

          #menu-toggle {
              height: 25%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 1.75rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          table {
            border-color: #212121;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            color: #e0e0e0;
            font-size: 1rem;
            font-family: Roboto Mono;
            background-color: #151515;
            padding: 0.25rem;
            border-radius: 5px;
          }

          img {
            max-width: calc(100% - 4rem);
          }
      }

      @media only screen and (orientation: landscape) and (min-width: 1000px) {
          :root {
              --menu-link: 1.75rem;
              --content-catchphrase: 4rem;
              --content-description: 1.5rem;
              --tagline: 1rem;
          }

          #logo {
              height: 50%;
          }

          #menu-toggle {
              height: 15%;
          }

          .content {
            width: calc(100% - 4rem);
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 2rem;
          }
          body {
            background: #101010;
            text-align: justify;
            font-size: 1.25rem;
          }
          h1 {
            color: #f0f0f0;
            font-family: Inter;
            font-size: 3.5rem;
          }

          h2 {
            color: #e0e0e0;
            font-family: Inter;
            font-size: 2.5rem;
          }

          h3 {
            color: #d0d0d0;
            font-family: Inter;
            font-size: 2.25rem;
          }

          h4, h5, h6 {
            color: #c4c4c4;
            font-family: Inter;
          }

          p, ul, ol, table, body {
            color: #c4c4c4;
            font-family: Inter;
          }

          table {
            border-color: #212121;
            font-size: 1.25rem;
          }

          blockquote {
            border-left: 2px solid #212121;
            margin: 2px 10px;
            padding: 2px 10px;
            font-family: Inter;
          }

          code, pre {
            color: #e0e0e0;
            font-size: 1.25rem;
            font-family: Roboto Mono;
            background-color: #151515;
            padding: 0.25rem;
            border-radius: 5px;
          }

          img {
            max-width: calc(100% - 4rem);
          }
      }

      a {
        color: inherit;
        transition: color 100ms ease-in-out;
      }

      a:hover {
        color: #ff9a51;
      }

      br {
          user-select: none;
      }

      ::selection {
          background: #ff9a51;
          color: #101010;
      }

      ::-webkit-scrollbar {
        width: 0.75rem;
      }

      ::-webkit-scrollbar-track {
        background: #101010; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        transition: background 100ms ease-in-out;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #ff9a51; 
      }
      </style>
    </head>
    <body>
    <main>
      <div class="header">
        <a href="/"><img id="logo" src="/bin/logo.svg" draggable="false" /></a>
        <div class="menu">
            <img id="menu-toggle" src="/bin/menu.svg" draggable="false" onclick="toggleMenu()"/>
            <div id="menu">
                <div id="menu-close" onclick="closeMenu()"></div>
                <div id="menu-content">
                    <div><a href="/">Home</a></div>
                    <div><a href="/launches">Launches</a></div>
                    <div><a href="/streams">Streams</a></div>
                    <div><a href="/wiki">Wiki</a></div>
                    <div><a href="/about">About</a></div>
                    <div class="menu-content-bottom"><a href="https://github.com/jordanreger/ltx">Github</a></div>
                </div>
            </div>
            <script>
                const menu_close = document.getElementById("menu-close");
                const menu = document.getElementById("menu");
                const menu_content = document.getElementById("menu-content");
                let open = false;

                function toggleMenu() {
                    open = !open;
                    if(open) {
                        if(window.innerWidth <= 600){
                            menu.style.width = "13.5rem"
                        } else {
                            menu.style.width = "12.5rem"
                        }
                        menu_content.style.visibility = "visible";
                        setTimeout(() => { menu_content.style.opacity = "100%" }, 150);
                        menu_close.style.visibility = "visible";
                        menu_close.style.opacity = "100%";
                    } else {
                        menu.style.width = "0rem";
                        setTimeout(() => { menu_content.style.visibility = "hidden" }, 50);
                        menu_content.style.opacity = "0%";
                        setTimeout(() => { menu_close.style.visibility = "hidden" }, 150);
                        menu_close.style.opacity = "0%";
                    }
                }

                function closeMenu() {
                    if(open) {
                        toggleMenu();
                    }
                }
            </script>
        </div>
      </div>
      <div class="content">
        ${Marked.parse(await file(`./${src}.md`)).content}
      </div>
    </main>
    </body>
    `;
}