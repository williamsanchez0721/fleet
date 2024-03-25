// axiosConfig.ts
import axios, { AxiosInstance } from "axios";
import { logout } from "./logout";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Usamos NEXT_PUBLIC_ para acceder a las variables de entorno en el cliente
const baseAPI = process.env.NEXT_PUBLIC_API_PATH; // También asumimos que estas variables están definidas en tu archivo .env.local
console.log(baseAPI);

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${baseURL}${baseAPI}`, // Concatenamos el baseURL y el baseAPI para formar la URL completa
    timeout: 50000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.data.message === "Unauthenticated.") {
                logout();
            }
        } else if (error.request) {
            console.error("No se recibió respuesta del servidor:", error.request);
        } else {
            console.error("Error al configurar la solicitud:", error.message);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
