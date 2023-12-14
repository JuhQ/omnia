import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { addMember } from "../../services/memberService.js";

const minUsernameLength = 3;
const minPasswordLength = 5;

const createMember = async ({ response, request, state }) => {
    const body = request.body();
    const params = await body.value;
    const username = params.get("username");
    const password = params.get("password");

    const usernameTooShort = username.trim().length <= minUsernameLength;
    const passwordOnlyWhitespace = password.trim().length === 0;
    const passwordTooShort = password.length <= minPasswordLength;

    if (usernameTooShort || passwordOnlyWhitespace || passwordTooShort) {
        response.status = 400;
        return;
    }

    const hash = await bcrypt.hash(password);

    const createdMember = await addMember(username, hash);

    if (createdMember) {
        await state.session.set("authenticated", true);
        await state.session.set("userId", createdMember.id);

        console.log("user created", createdMember);

        // response.body = "User created";
        response.redirect("/");
    } else {
        response.status = 400;
        response.body = "Tunnuksen luonti ei onnistunut";
    }
}

export default createMember;