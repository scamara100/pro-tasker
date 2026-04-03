import axios from 'axios'

export const getToken = () => localStorage.getItem('token') 

export const userClient = axios.create({
    baseURL: 'http://localhost:8080/api/users',
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
})

export const projectClient = axios.create({
    baseURL: 'http://localhost:8080/api/projects'
})

projectClient.interceptors.request.use((req) =>{
    if(getToken()) req.headers.Authorization =  `Bearer ${getToken()}`
    return req;
})