import getNameRows from "../../services/nameService.js";
import { getTweetsFromDatabase } from "../../services/tweetService.js";

const indexRoute = async ({ render }) => {
    const rows = await getNameRows();
    const tweets = await getTweetsFromDatabase();

    render("index.eta", { title: "Omnitter", rows, tweets });
};

export default indexRoute;