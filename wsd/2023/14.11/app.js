import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";

const app = new Application();

const router = new Router();

const renderMiddleware = async (context, next) => {
  configure({
    views: `${Deno.cwd()}/views/`,
  });

  context.render = async (file, data) => {
    context.response.headers.set("Content-Type", "text/html; charset=utf-8");
    context.response.body = await renderFile(file, data);
  };

  await next();
};

const serveStaticFiles = async (context, next) => {
  if (context.request.url.pathname.startsWith("/static")) {
    const path = context.request.url.pathname.substring(7);
    await send(context, path, {
      root: `${Deno.cwd()}/static`,
    });
  } else {
    await next();
  }
};

app.use(renderMiddleware);
app.use(serveStaticFiles);

const indexRoute = ({ render }) => {
  render("index.eta", { title: "Omnitter" });
};

const tweets = [];

const storeTweetRoute = async ({ response, request }) => {
  const body = request.body();
  const params = await body.value;
  tweets.push(JSON.parse(params));

  console.log("tweets", tweets);

  response.body = "ok";
};

const getTweets = ({ response }) => {
  response.headers.set("Content-Type", "application/json; charset=utf-8");

  response.body = JSON.stringify(tweets);
};

router.get("/", indexRoute);
router.post("/api/tweet", storeTweetRoute);
router.get("/api/tweets", getTweets);

app.use(router.routes());

// http://localhost:7000/
app.listen({ port: 7000 });
