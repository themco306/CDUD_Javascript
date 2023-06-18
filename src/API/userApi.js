import axiosInstance from "./axiosInstance"
export const userApi = {
    register(data) {
        var url = 'auth/local/register';
        return axiosInstance.post(url, data)
    },
    login(data) {
        var url = 'auth/local'
        return axiosInstance.post(url, data)
    },
    
}