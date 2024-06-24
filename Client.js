import axios from 'axios';
import queryString from 'query-string';

import Api from './Api';

const Client = axios.create({
    baseURL: Api.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: Api.apiKey})
});

Client.interceptors.request.use(async (config) => config);

Client.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default Client;