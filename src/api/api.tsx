import axios from "axios";

const api = axios.create({
    baseURL: 'http://apimock/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api