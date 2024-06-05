import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://linkteebackend.skyvisionpakistan.com/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json'
    }
})

export default instance
