import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://linkteebackend.skyvisionpakistan.com/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        // "X-CSRF-TOKEN": "asdasd"
    }
})

export default instance
