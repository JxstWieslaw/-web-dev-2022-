import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://r3f-3d-avatar.herokuapp.com"
})