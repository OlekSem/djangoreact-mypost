import type {City} from "../types";
import {api} from "./client.ts";


export const getCities = async (): Promise<City[]> => {
    const response = await api.get("/cities/");
    return response.data;
}

export const createCity = async (city : City): Promise<City> => {
    const response = await api.post("/cities/", city);
    return response.data;
}