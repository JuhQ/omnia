
import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import authenticate from "./controllers/authenticationController.js";
import indexRoute from "./controllers/indexController.js";
import { addApiTweet, addTweet, getTweets } from "./controllers/tweetController.js";
import createMember from "./controllers/memberController.js";

const router = new Router();

router.get("/", indexRoute);

// alla olevat kutsutaan dynaamisen frontend javascriptin puolelta
router.post("/api/tweet", addApiTweet);
router.get("/api/tweets", getTweets);

// näitä routeja kutsutaan staattisen html:n puolelta
router.post("/add-tweet", addTweet);
router.post("/authentication", authenticate);
router.post("/signup", createMember);

export default router;