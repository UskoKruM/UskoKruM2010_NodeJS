import { getConnection } from "./database/connectionMongoDB.js";
import { v4 } from "uuid";

const getLanguages = async () => {
    try {
        const database = await getConnection();
        const languages = await database.collection("languages").find().toArray();
        console.table(languages);
        console.log("Languages listed!");
    } catch (error) {
        console.error(error);
    }
};

const addLanguage = async () => {
    const language = { _id: v4(), name: "Kotlin", developers: 109, enabled: true };

    try {
        const database = await getConnection();
        const result = await database.collection("languages").insertOne(language);
        console.log(result);
        console.log("Language added.");
    } catch (error) {
        console.error(error);
    }
};

getLanguages();
addLanguage();
