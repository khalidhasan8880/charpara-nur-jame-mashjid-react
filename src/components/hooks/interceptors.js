import axios from "axios"


const authFetch = axios.create({
    baseURL: 'http://localhost:5000', 
})

authFetch.interceptors.request.use((request)=>{
    request.headers.Accept = 'application/json'
    const token =  localStorage.getItem('token')
    if (token) {
        console.log(token);
        request.headers.Authorization = token
    }
    console.log('request send');
  return request
}, (error)=>{
    console.log(error);
    return Promise.reject(error)
})
authFetch.interceptors.response.use((response)=>{
    console.log('got respond');
    return response
}, (error)=>{
    console.log(error);
})

export default authFetch