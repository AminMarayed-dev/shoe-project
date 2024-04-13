import axios from 'axios';
import { baseUrl, endPoints } from './config';

export async function getUsers(child) {
    const response = await axios.get(`${baseUrl}/${endPoints.users}/1?_embed=${child}`);
}

