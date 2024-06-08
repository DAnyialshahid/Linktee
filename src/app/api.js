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
        let token = localStorage.getItem('token'); 
        if (token) {
            // Remove the surrounding "" from the token if they exist
            token = token.replace(/^"|"$/g, '');
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
