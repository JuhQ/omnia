import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { getUserByUsername } from "../../services/memberService.js";

const userHasSession = (response) => {
    response.redirect("/");
};

const authenticateUser = async ({ response, request, state }) => {
    const body = request.body();
    const params = await body.value;
    const username = params.get("username");
    const password = params.get("password");

    console.log("username", username);
    console.log("password", password);


    const user = await getUserByUsername(username);

    if(!user) {
        response.status = 400;
        return;
    }

    console.log("user", user);

    const hash = user.password;

    // tämä rivi ei toimi oikein, aiheuttaa virheen Error: The response is not writable.
    const passwordCorrect = await bcrypt.compare(password, hash);

    if (passwordCorrect) {
        console.log("tänne mentiin")
        await state.session.set("authenticated", true);
        await state.session.set("userId", user.id);
        response.status = 200;
        response.redirect("/");
    } else {
        response.status = 401;
        response.body = "Voi voi, kirjautuminen ei onnistunut.";
    }
};


const authenticate = async ({ response, request, state }) => {
    const isAuthenticated = await state.session.get("authenticated");

    if (isAuthenticated) {
        return userHasSession(response);
    }

    authenticateUser({ response, request, state });
};

export default authenticate;