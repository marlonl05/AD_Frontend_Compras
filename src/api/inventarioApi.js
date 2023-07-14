import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_INVENTARIO_URL, VITE_API_INVENTARIO_TOKEN: token } = getEnviroments();

export const inventarioApi = axios.create({
	baseURL: VITE_API_INVENTARIO_URL,
});

inventarioApi.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
		Authorization: token,
	};
	return config;
});
