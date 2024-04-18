import axios from 'axios';
import { baseUrl, endPoints } from './config';

export async function getUsers() {
    const response = await axios.get(`${baseUrl}/${endPoints.users}`);
    return response.data;
}

export async function updateUsers(id, item) {
    const response = await axios.patch(`${baseUrl}/${endPoints.users}/${id}`, item);
    return response.data;
}





