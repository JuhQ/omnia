import sql from "../database/database.js";

const getNameRows = async () => {
    const rows = await sql`SELECT name, id FROM users`;

    return rows;
};

export default getNameRows;