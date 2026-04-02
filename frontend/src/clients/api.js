import axios from 'axios'

const token = localStorage.getItem('token')
console.log(token)

export const userClient = axios.create({
    baseURL: 'http://localhost:8080/api/users'
})

export const projectClient = axios.create({
    baseURL: 'http://localhost:8080/api/projects',
    headers: {
        Authorization: `Bearer ${token}`
    }
})