import fetch from "node-fetch";

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.table(users);
};

getUsers();
