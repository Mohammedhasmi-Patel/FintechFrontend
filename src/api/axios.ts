
import axios, {InternalAxiosRequestConfig} from "axios";
import { getAccessToken } from "../helpers/localStorage";


const axiosInstnace = axios.create({
    baseURL:import.meta.env.VITE_APP_BACKEND_URL,  
    headers: {
        "Content-Type": "application/json",
    },

});

axiosInstnace.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)

);