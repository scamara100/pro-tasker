import axios from 'axios'

export const getToken = () => localStorage.getItem('token') 

// create axios instance
export const userClient = axios.create({
    baseURL: 'http://localhost:8080/api/users',
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
    baseURL: 'http://localhost:8080/api/projects'
})

projectClient.interceptors.request.use((req) =>{
    const token = getToken();
    if(token) req.headers.Authorization =  `Bearer ${token}`
    return req;
})