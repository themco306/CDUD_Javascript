import axiosInstance from "./axiosInstance"
 const userApi = {
    add(data) {
        var url = 'orders';
        return axiosInstance.post(url, data)
    },
    
}
export default userApi