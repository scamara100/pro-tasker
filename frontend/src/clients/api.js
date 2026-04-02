import axios from 'axios'

export const userClient = axios.create({
    baseURL: 'http://localhost:8080/api/users'
})

export const projectClient = axios.create({
    baseURL: 'http://localhost:8080/api/projects'
})

projectClient.interceptors.request.use((req) =>{
    const token = localStorage.getItem('token')

    if(token){
        req.headers.Authorization =  `Bearer ${token}`
    }
    return req;
})