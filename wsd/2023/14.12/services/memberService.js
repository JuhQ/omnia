import sql from "../database/database.js"

/*
// Toistaiseksi turha, saatamme käyttää myöhemmin vaikka members listan luomiseen
export const getAllMembers = async () => {
    const members = await sql`SELECT id, username FROM members`;

    return members;
};
*/


export const getUserByUsername = async (username) => {
    const result = await sql`SELECT * FROM members WHERE username=${username} LIMIT 1`;

    return result[0];
}

export const addMember = async (username, hash) => {
    console.log("username", username);
    console.log("hash", hash);
    const result = await sql`
        INSERT INTO members
        (username, password)
        VALUES
        (${username}, ${hash})
        RETURNING id, username
    `;

    console.log("result", result);

    return result[0];
}