import axios from 'axios'
import APP_ENV from "../env";

export const api = axios.create({
    baseURL: APP_ENV.API_BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json",
    }
});