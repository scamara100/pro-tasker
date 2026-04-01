import axios from 'axios'

export const userClient = axios.create({
    baseURL: 'http://localhost:8080/api/users'
})