// import axios from 'axios';
// import { baseUrl, endPoints } from './config';


// export async function PostCart(cart) {
//   const response = await axios.post(`${baseUrl}/${endPoints.users}`,cart);
//   return response.data[0].cart;
// }

export async function getCart() {
  const response = await axios.get(`${baseUrl}/${endPoints.users}`);
  return response.data[0].cart;
}

export async function getCartById(id) {
  const response = await axios.get(`${baseUrl}/${endPoints.users}/${id}`);
  return response.data[0].cart;
}

export async function updateCart(id, cart) {
  const response = await axios.patch(`${baseUrl}/${endPoints.users}/${id}`, cart);
  return response.data[0].cart;
}

export async function deleteCart(id) {
  const response = await axios.delete(`${baseUrl}/${endPoints.users}/${id}`);
  return response.data[0].cart;
}




