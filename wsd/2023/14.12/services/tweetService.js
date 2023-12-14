import sql from "../database/database.js";

export const getTweetsFromDatabase = async () => {
    return await sql`SELECT * FROM tweets ORDER BY id DESC`;
};

export const getLastTweetFromDatabase = async () => {
    const result = await sql`SELECT * FROM tweets ORDER BY id DESC LIMIT 1`;

    return result[0];
};

export const addTweetToDatabase = async (message) => {
    if(!message.trim().length) {
        return;
    }

    return await sql`
        INSERT INTO tweets
        (sender, message, date, img)
        VALUES
        ('Juha', ${message}, ${new Date()}, 'http://placekitten.com/100/50')
        RETURNING id, message, sender, date, img
    `;
};
