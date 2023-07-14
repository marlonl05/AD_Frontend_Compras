import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_URL } = getEnviroments();

const comprasApi = axios.create({
	baseURL: VITE_API_URL,
});

comprasApi.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	};

	return config;
});

export default comprasApi;
export * from './inventarioApi';
