import axios from "axios"

export const fetchDataService = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    return data;
}