import axios from "axios";
import AppUrl from "./AppUrl";
const configInstance={
    baseURL: AppUrl.baseURL,
    headers: {
        'Authorization':`Bearer ${AppUrl.token}`,
        "Content-Type": "application/json"
        }
};
const axiosInstance = axios.create(configInstance);
export default axiosInstance;