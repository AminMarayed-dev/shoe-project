import axios from 'axios'
import { baseUrl, endPoints } from './config'

export async function getProducts(firstIndex= 0, lastIndex = "") {
    const response = await axios.get(`${baseUrl}/${endPoints.products}?_start=${firstIndex}&_end=${lastIndex}`);
    return response.data;
}

export async function getProductsById(id) {
    const response = await axios.get(`${baseUrl}/${endPoints.products}/${id}`);
    return response.data;
}

export async function getProductsByFilter(filter, value) {
    const response = await axios.get(`${baseUrl}/${endPoints.products}?${filter}=${value}`);
    // return response.data;
    return response.data;
}


