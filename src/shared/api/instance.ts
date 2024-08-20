import axios, {AxiosInstance} from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: '/data',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { instance }