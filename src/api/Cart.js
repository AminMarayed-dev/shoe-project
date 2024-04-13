import axios from 'axios';
import { baseUrl, endPoints } from './config';


export async function PostCart(cart) {
  const response = await axios.post(`${baseUrl}/${endPoints.cart}`,cart);
  return response.data;
}

export async function getCart() {
  const response = await axios.get(`${baseUrl}/${endPoints.cart}`);
  return response.data;
}

export async function getCartById(id) {
  const response = await axios.get(`${baseUrl}/${endPoints.cart}/${id}`);
  return response.data;
}

export async function updateCart(id, cart) {
  const response = await axios.patch(`${baseUrl}/${endPoints.cart}/${id}`, cart);
  return response.data;
}

export async function deleteCart(id) {
  const response = await axios.delete(`${baseUrl}/${endPoints.cart}/${id}`);
  return response.data;
}




