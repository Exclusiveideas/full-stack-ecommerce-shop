import axios from 'axios';

const BASE_URL = "http://localhost:5001/api";
const TOKEN = "token";


export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});