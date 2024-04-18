import axios from "axios";
import { baseUrl, endPoints } from "./config";

export async function getProducts(limit, start = 0) {
  const response = await axios.get(
    `${baseUrl}/${endPoints.products}?_limit=${limit}&_start=${start}`
  );
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

export async function getProductsBySearch(name) {
  const response = await axios.get(`${baseUrl}/${endPoints.products}?name_like=${name}`);
  return response.data;
}