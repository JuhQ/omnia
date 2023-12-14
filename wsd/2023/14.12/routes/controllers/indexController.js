import { getTweetsFromDatabase } from "../../services/tweetService.js";

const indexRoute = async ({ render, cookies, state }) => {
    const writeTimes = await cookies.get("write-times");
    const writeTimesInSession = await state.session.get("write-times-in-session");
    const isAuthenticated = await state.session.get("authenticated");

    console.log("isAuthenticated",isAuthenticated)

    render("index.eta", {
        title: "Omnitter",
        tweets: await getTweetsFromDatabase(),
        writeTimes,
        writeTimesInSession,
        isAuthenticated
    });
};

export default indexRoute;