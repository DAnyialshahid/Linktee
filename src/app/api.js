import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://linkteebackend.skyvisionpakistan.com/',
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
});

// Add a request interceptor to include the Bearer token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
