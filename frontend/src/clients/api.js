import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getToken = () => localStorage.getItem('token') 

// create axios instance
export const userClient = axios.create({
    baseURL: BASE_URL + '/api/users',
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
})

userClient.interceptors.request.use((req) => {
    const token = getToken();
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const projectClient = axios.create({
    baseURL: `${BASE_URL}/api/projects`
})

projectClient.interceptors.request.use((req) =>{
    const token = getToken();
    if(token) req.headers.Authorization =  `Bearer ${token}`
    return req;
})