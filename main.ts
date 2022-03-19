// deno-lint-ignore-file no-case-declarations
import { serve } from "https://deno.land/std@0.128.0/http/server.ts"

import { md } from "./src/markdown.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname, _params = new URLSearchParams(url.search);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/404" }}
  const file = async (fp:string) => { const d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    // paths
    case '/':
      tr = true, rb = await file("./src/index.html"), ct = "text/html; charset=UTF-8";
      break;
    case '/launches':
      tr = true, rb = md("/src/launches"), ct = "text/html; charset=UTF-8";
      break;
    case '/streams':
      tr = true, rb = await file("./src/streams.html"), ct = "text/html; charset=UTF-8";
      break;
    case '/about':
      tr = true, rb = md("/src/about"), ct = "text/html; charset=UTF-8";
      break;
    case '/wiki':
      tr = true, rb = md("/src/wiki"), ct = "text/html; charset=UTF-8";
      break;
    case route('/wiki/.'):
      const mdPath = path.replace(".md", "");
      tr = true, rb = md(mdPath), ct = "text/html; charset=UTF-8";
      break;

    // components
    case '/src/components/menu.mjs':
      tr = true, rb = await file("./src/components/menu.mjs"), ct = "text/javascript";
      break;

    // bin
    case '/bin/logo.svg':
      tr = true, rb = await file("./bin/logo.svg"), ct = "image/svg+xml";
      break;
    case '/bin/menu.svg':
      tr = true, rb = await file("./bin/menu.svg"), ct = "image/svg+xml";
      break;
    case '/bin/more_vert_white_48dp.svg':
      tr = true, rb = await file("./bin/more_vert_white_48dp.svg"), ct = "image/svg+xml";
      break;
    case '/bin/starship-diagram-back.svg':
      tr = true, rb = await file("./bin/starship-diagram-back.svg"), ct = "image/svg+xml";
      break;
    case '/bin/cover.svg':
      tr = true, rb = await file("./bin/cover.svg"), ct = "image/svg+xml";
      break;

    default:
      tr = true, rb = "404", ct = "text/html; charset=UTF-8";
  }

  let res;

  if(tr){
    res = new Response(await rb, { headers: { "content-type": ct } });
  } else {
    res = Response.redirect(await rb, 302);
  }
  return res!;
}

await serve(handler);