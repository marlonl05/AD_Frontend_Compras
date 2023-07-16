/* eslint-disable no-unused-vars */
import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_LOGIN_URL, VITE_API_LOGIN_TOKEN: token } = getEnviroments();

export const securityApi = axios.create({
	baseURL: VITE_API_LOGIN_URL,
});

securityApi.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
		Authorization: token,
	};
	return config;
});
