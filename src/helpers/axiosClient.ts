import axios, { AxiosInstance, AxiosResponse } from 'axios';
const queryString = require('query-string');
const { token } = JSON.parse(localStorage.getItem('persist:auth') as string)

const authorization = token ? {'Authorization': `Bearer ${token}`} : null

const axiosClient: AxiosInstance = axios.create(
    {
        baseURL: 'https://my-json-server.typicode.com/typicode/demo',
        headers: {
            'content-type': 'application/json',
            ...authorization
        },
        paramsSerializer: params => queryString.stringtify(params),
    }
);
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    if (response && response.data) {
        return response;
    }
}, function (error) {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
});

axiosClient.interceptors.request.use(function (config: any) {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
});
export default axiosClient;