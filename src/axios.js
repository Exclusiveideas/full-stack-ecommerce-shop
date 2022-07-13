import axios from 'axios';

const BASE_URL = "https://e-commerce-lama.herokuapp.com/api";
const TOKEN = "token";


export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});