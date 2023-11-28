
// shift+alt+o - käsittelee import rivejä, poistaa mm. käyttämättömät importit

import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import renderMiddleware from './middlewares/renderMiddleware.js';
import serveStaticFiles from "./middlewares/serveStaticFiles.js";

const app = new Application();
const router = new Router();

const indexRoute = ({ render }) => {
    render("index.eta", { title: "Omnitter" });
};

const tweets = [
    {
        sender: "Juha",
        message: "nytkö tämä toimii?",
        date: new Date(),
        img: "http://placekitten.com/100/50",
    }
];

const storeTweetRoute = async ({ response, request }) => {
    const body = request.body();
    const params = await body.value;

    const message = JSON.parse(params).message.trim();

    const newTweet = {
        img: "http://placekitten.com/100/100",
        sender: Math.random(),
        date: new Date(),
        message
    };

    tweets.push(newTweet);

    response.body = JSON.stringify(newTweet);
};

const getTweets = ({ response }) => {
    response.headers.set("Content-Type", "application/json; charset=utf-8");

    response.body = JSON.stringify(tweets) + "\n";
};

router.get("/", indexRoute);
router.post("/api/tweet", storeTweetRoute);
router.get("/api/tweets", getTweets);

app.use(serveStaticFiles);
app.use(renderMiddleware);
app.use(router.routes());

// http://localhost:7777/
app.listen({ port: 3000 });
