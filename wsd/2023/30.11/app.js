
// shift+alt+o - käsittelee import rivejä, poistaa mm. käyttämättömät importit

import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import postgres from "https://deno.land/x/postgresjs@v3.4.2/mod.js";
import renderMiddleware from './middlewares/renderMiddleware.js';
import serveStaticFiles from "./middlewares/serveStaticFiles.js";

const app = new Application();
const router = new Router();

const sql = postgres({});

const getNameRows = async () => {
    const rows = await sql`SELECT name, id FROM users`;

    return rows;
};

const getTweetsFromDatabase = async () => {
    return await sql`SELECT * FROM tweets`;
};

const getLastTweetFromDatabase = async () => {
    const result = await sql`SELECT * FROM tweets ORDER BY id DESC LIMIT 1`;

    return result[0];
};

const addTweetToDatabase = async (message) => {
    return await sql`
        INSERT INTO tweets
        (sender, message, date, img)
        VALUES
        ('Juha', ${message}, ${new Date()}, 'http://placekitten.com/100/50')`;
}


const indexRoute = async ({ render }) => {
    const rows = await getNameRows();
    const tweets = await getTweetsFromDatabase();
    render("index.eta", { title: "Omnitter", rows, tweets });
};

const storeTweetRoute = async ({ response, request }) => {
    const body = request.body();
    const params = await body.value;

    const message = JSON.parse(params).message.trim();
    await addTweetToDatabase(message);

    const newTweet = await getLastTweetFromDatabase();

    response.body = JSON.stringify(newTweet);
};

const getTweets = async ({ response }) => {
    response.headers.set("Content-Type", "application/json; charset=utf-8");

    const tweets = await getTweetsFromDatabase();

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
