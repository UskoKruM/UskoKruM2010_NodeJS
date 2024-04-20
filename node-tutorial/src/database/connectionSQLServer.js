import mssql from "mssql";

const connectionSettings = {
    server: "localhost",
    database: "node_restapi",
    user: "sa",
    password: "S3rv3r",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try {
        return await mssql.connect(connectionSettings);
    } catch (error) {
        console.error(error);
    }
}

export { mssql };
