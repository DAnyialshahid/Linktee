import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        // "X-CSRF-TOKEN": "asdasd"
    }
})

export default instance
