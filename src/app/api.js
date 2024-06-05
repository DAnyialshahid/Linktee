import axios from 'axios'

//https://dummyjson.com/
const instance = axios.create({
    baseURL: 'https://linkteebackend.skyvisionpakistan.com/',
})

export default instance
