
import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import indexRoute from "./controllers/indexController.js";
import { addTweet, getTweets } from "./controllers/tweetController.js";

const router = new Router();

router.get("/", indexRoute);

// alla olevat kutsutaan frontend javascriptin puolelta
router.post("/api/tweet", addTweet);
router.get("/api/tweets", getTweets);

export default router;