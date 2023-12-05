
// shift+alt+o - käsittelee import rivejä, poistaa mm. käyttämättömät importit

import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import renderMiddleware from './middlewares/renderMiddleware.js';
import serveStaticFiles from "./middlewares/serveStaticFiles.js";
import router from "./routes/routes.js";

const app = new Application();

app.use(serveStaticFiles);
app.use(renderMiddleware);
app.use(router.routes());

// http://localhost:7777/
app.listen({ port: 3000 });
