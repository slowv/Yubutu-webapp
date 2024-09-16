import axios, {AxiosRequestConfig} from "axios";
import {store} from "../../store";
import {logOut} from "../../store/auth";
import _ from "lodash";

const getHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const getHttpConfig = (headers = {}, config: AxiosRequestConfig = {}) => {
    return {...config, ...headers};
}

export const axiosInstance = axios.create(getHttpConfig());

axiosInstance.interceptors.request.use((request) => {
    const getToken = store.getState().auth.access_token;
    const language = 'vi';
    if (getToken) {
        // @ts-ignore
        request.headers = {
            Authorization: `Bearer ${getToken}`,
            'Accept-Language': language
        }
    }
    return request;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        if (error) {
            const status = _.get(error, 'response.status', 0)
            if (status && status === 401) {
                store.dispatch(logOut())
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    },
);

export const get = <T>(url: string, httpConfig = getHttpConfig(getHeaders)): Promise<T> => (
    new Promise((resolve, reject) => {
        axiosInstance.get(url, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err)
        )
    })
);

export const post = <T>(url: string, data: Record<any, any> = {}, httpConfig = getHttpConfig(getHeaders)): Promise<T> => (
    new Promise((resolve, reject) => {
        axiosInstance.post(url, data, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err)
        )
    })
);

export const postDataForm = <T>(url: string, data: Record<any, any> = {}, httpConfig = getHttpConfig()): Promise<T> => {
    const params = new FormData()
    for (const key in data) {
        if (_.isArray(data[key])) {
            for (const index of Object.keys(data[key])) {
                params.append(key, data[key][index])
            }
        } else {
            params.append(key, data[key])
        }
    }
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, params, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })
}

export const putDataForm = <T>(url: string, data: Record<any, any> = {}, httpConfig = getHttpConfig()): Promise<T> => {
    const params = new FormData()
    for (const key in data) params.append(key, data[key])
    return new Promise((resolve, reject) => {
        axiosInstance.put(url, params, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })
}

export const getBlobDocument = <T>(
    url: string,
    httpConfig = getHttpConfig({responseType: 'blob', ...getHeaders}),
): Promise<T> =>
    new Promise((resolve, reject) => {
        axiosInstance.get(url, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })


export const postBlobDocument = <T>(
    url: string,
    data: Record<any, any> = {},
    httpConfig = getHttpConfig({responseType: 'blob', ...getHeaders}),
): Promise<T> =>
    new Promise((resolve, reject) => {
        axiosInstance.post(url, data, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })

export const put = <T>(url: string, data: Record<any, any> = {}, httpConfig = getHttpConfig(getHeaders)): Promise<T> =>
    new Promise((resolve, reject) => {
        axiosInstance.put(url, data, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })

export const deleteApi = <T>(url: string, httpConfig = getHttpConfig(getHeaders)): Promise<T> =>
    new Promise((resolve, reject) => {
        axiosInstance.delete(url, {...httpConfig}).then(
            response => resolve(response.data as T),
            err => reject(err),
        )
    })