import axios from 'axios'
import { baseUrl, endPoints } from './config'

export async function getProducts(firstIndex= 0, lastIndex = "") {
    const response = await axios.get(`${baseUrl}/${endPoints.products}?_start=${firstIndex}&_end=${lastIndex}`);
    return response.data;
}

