import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://linkteebackend.skyvisionpakistan.com',
})

export default instance
