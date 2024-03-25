import axios, { AxiosInstance } from "axios";
import { logout } from "./logout";

const baseURL = "http://localhost:8000/api/"; 
console.log(baseURL);

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${baseURL}`, 
    timeout: 50000,
});

axiosInstance.interceptors.request.use((config) => {
    // const token = localStorage.getItem("token");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoibmFtZSB1c2VyIiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZF9hdCI6bnVsbCwiaW1hZ2UiOm51bGwsInBhc3N3b3JkIjoiJDJiJDA1JHd0ZnZyS3kzVEFYMHB5SDN5blNHN2VkMmpqTlh0LnpjdmZVY0FuLi9EN2YvUEVWYnRjSnkyIiwicm9sZV9pZCI6MSwiY3JlYXRlZEF0IjoiMjAyNC0wMy0yNVQxODoyMzo0MS45NzFaIiwidXBkYXRlZEF0IjoiMjAyNC0wMy0yNVQxODoyMzo0MS45NzFaIiwiZGVsZXRlZEF0IjpmYWxzZX0sImlhdCI6MTcxMTM5MzM4MSwiZXhwIjoxNzExMzk2OTgxfQ.YDoVXK9NKjNH2gEbKZz41W5rPrIAPW8wSvJtf8m0q0A"
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response) {
//             if (error.response.data.message === "Unauthenticated.") {
//                 logout();
//             }
//         } else if (error.request) {
//             console.error("No se recibió respuesta del servidor:", error.request);
//         } else {
//             console.error("Error al configurar la solicitud:", error.message);
//         }

//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
