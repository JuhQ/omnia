
// shift+alt+o - käsittelee import rivejä, poistaa mm. käyttämättömät importit

import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import renderMiddleware from './middlewares/renderMiddleware.js';
import serveStaticFiles from "./middlewares/serveStaticFiles.js";
import router from "./routes/routes.js";
import { Session, CookieStore, PostgresStore } from "https://deno.land/x/oak_sessions@v4.1.9/mod.ts";
import sql from "./database/database.js";

const app = new Application();

//const store = new CookieStore('very-secret-key');
const store = new PostgresStore(sql);
await store.initSessionsTable();

app.use(Session.initMiddleware(store));

app.use(serveStaticFiles);
app.use(renderMiddleware);
app.use(router.routes());

// http://localhost:7777/
app.listen({ port: 3000 });
