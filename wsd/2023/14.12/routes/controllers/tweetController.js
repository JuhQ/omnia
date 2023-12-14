import {
    addTweetToDatabase,
    getTweetsFromDatabase
} from "../../services/tweetService.js";

export const getTweets = async ({ response }) => {
    response.headers.set("Content-Type", "application/json; charset=utf-8");

    const tweets = await getTweetsFromDatabase();

    response.body = JSON.stringify(tweets) + "\n";
};

export const addApiTweet = async ({ response, request, cookies, state }) => {
    const body = request.body();
    const params = await body.value;

    let writeTimes = await cookies.get("write-times");
    if(!writeTimes || isNaN(writeTimes)) {
        writeTimes = 0;
    }

    await cookies.set("write-times", Number(writeTimes) + 1);

    /*
    // Kommentoitu pois sillä emme halua näitä arvoja sessioon tässä kohtaa.
   
    let writeTimesInSession = await state.session.get("write-times-in-session");

    if(!writeTimesInSession || isNaN(writeTimesInSession)) {
        writeTimesInSession = 0;
    }

    await state.session.set("write-times-in-session", Number(writeTimesInSession) + 1);

    await state.session.set("user", {
        id: 123,
        email: "juha@omnia.fi",
        listOfItems: [1,2,3,4]
    });
    */

    const message = JSON.parse(params).message.trim();
    const result = await addTweetToDatabase(message);

    if(!result) {
        response.body = JSON.stringify({ error: "no data" });
    } else {
        response.body = JSON.stringify(result[0]);
    }
};



export const addTweet = async ({ response, request, cookies }) => {
    const body = request.body();
    const params = await body.value;
    const message = params.get("message").trim();

    if(!message.length) {
        response.redirect("/error");
        return;
    }

    let writeTimes = await cookies.get("write-times");
    if(!writeTimes || isNaN(writeTimes)) {
        writeTimes = 0;
    }

    await cookies.set("write-times", Number(writeTimes) + 1);

    await addTweetToDatabase(message);

    response.redirect("/");
};
