import { baseUrl, endPoints } from "./config";
import axios from "axios";
export async function postWishList(wishlist) {
    const response = await axios.post(`${baseUrl}/${endPoints.wishlist}`, wishlist);
    return response.data;
}

export async function getWishList() {
    const response = await axios.get(`${baseUrl}/${endPoints.users}`);
    return response.data[0].wishlist;
}