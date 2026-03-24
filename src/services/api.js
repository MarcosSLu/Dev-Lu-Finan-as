import axios from "axios";

const api = axios.create({
    // baseURL: 'https://localhost:3333'
    baseURL: 'http://192.168.1.67:3333'
})

export default api