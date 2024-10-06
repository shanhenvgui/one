import axios from "axios";
// import path from "path";
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: import.meta.env.VITE_APP_BASE_API, // 使用 Vite 的环境变量
    timeout:5000
})

service.interceptors.request.use(

)

service.interceptors.response.use(
    response => {
        return response.data
    }
)
export default service