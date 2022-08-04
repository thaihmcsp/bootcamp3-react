import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.nodemy.vn/api/',
});

export default instance