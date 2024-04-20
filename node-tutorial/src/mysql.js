import { pool } from "./database/connectionMySQL.js";

const getLanguages = async () => {
    try {
        const [result] = await pool.query("SELECT id, name, developers, active FROM language;");
        console.table(result);
        console.log("Languages listed!");
    } catch (error) {
        console.error(error);
    }
};

const addLanguage = async () => {
    try {
        const [result] = await pool.query("INSERT INTO language (name, developers, active) "
                                        + "VALUES (?, ?, ?)", ["Pascal", 17, 1]);
        console.table(result);
        console.log("Language added.");
    } catch (error) {
        console.error(error);
    }
};

//getLanguages();
//addLanguage();
