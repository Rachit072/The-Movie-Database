import axios from "axios";

const axiosInstance = axios.create(defaultOptions);

// const axiosInstance = axios.create({
//     baseURL: 
// })

const responseHandler = respose =>{
    return respose;
};
const errorHandler = error =>{
    return Promise.reject(error);
}

axiosInstance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
);