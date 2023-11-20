import axios from "axios";

const getProducts = async () => {
    console.time("process");
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    console.log(`${products.length} products found.`);
    console.timeEnd("process");
};

getProducts();
