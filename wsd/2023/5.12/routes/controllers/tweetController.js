import {
    addTweetToDatabase,
    getTweetsFromDatabase
} from "../../services/tweetService.js";

export const getTweets = async ({ response }) => {
    response.headers.set("Content-Type", "application/json; charset=utf-8");

    const tweets = await getTweetsFromDatabase();

    response.body = JSON.stringify(tweets) + "\n";
};

export const addTweet = async ({ response, request }) => {
    const body = request.body();
    const params = await body.value;

    const message = JSON.parse(params).message.trim();
    const result = await addTweetToDatabase(message);

    response.body = JSON.stringify(result[0]);
};
