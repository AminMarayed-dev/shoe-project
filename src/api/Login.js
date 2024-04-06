import axios from "axios";
import { baseUrl } from "./config";


export async function getPersonData() {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
}
