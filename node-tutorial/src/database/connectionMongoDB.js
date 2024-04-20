import { MongoClient } from "mongodb";

const getConnection = async () => {
    try {
        const mongoUrl = "mongodb://localhost:27017/nodejs_test";
        const client = await MongoClient.connect(mongoUrl);
        return client.db();
    } catch (error) {
        console.error(error);
    }
};

export { getConnection };
