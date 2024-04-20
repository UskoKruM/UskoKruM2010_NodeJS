import pg from "pg";

export const pool = new pg.Pool({
    host: "localhost",
    port: 5432,
    database: "node_test",
    user: "postgres",
    password: "S3rv3r"
});
