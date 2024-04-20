import { config } from "dotenv";

config();

const database = process.env.DATABASE;
const user = process.env.USER || "root";

console.log(database);
console.log(user);
