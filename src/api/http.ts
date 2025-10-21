import axios from "axios";

export const http = axios.create({
    baseURL: import.meta.env.PUBLIC_API_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 10000
})