import { getConnection, mssql } from "./database/connectionSQLServer.js";

const getProducts = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT id, name, description, quantity FROM product");
        console.table(result.recordset);
        console.log("Products listed!");
    } catch (error) {
        console.error(error);
    }
};

const addProduct = async () => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("name", mssql.VarChar, "Samsung Galaxy S23 Ultra")
            .input("description", mssql.Text, "A very good smartphone.")
            .input("quantity", mssql.SmallInt, 61)
            .query("INSERT INTO product (name, description, quantity) VALUES (@name, @description, @quantity)");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

getProducts();
addProduct();
