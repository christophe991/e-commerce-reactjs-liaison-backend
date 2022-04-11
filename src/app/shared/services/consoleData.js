import axios from 'axios'
const baseURL = 'http://localhost:8080/api'

export const getConsole = () =>{
    return axios.get(baseURL + '/console')
}
export const postConsoleApi = (data) =>{
    return axios.post(baseURL + '/console', data)
}
