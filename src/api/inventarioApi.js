import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_INVENTARIO_URL } = getEnviroments();

export const inventarioApi = axios.create({
	baseURL: VITE_API_INVENTARIO_URL,
});
localStorage.setItem(
	'token',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hdGVpdG8iLCJpYXQiOjE2ODgzOTg5MzQsImV4cCI6MTY4ODQ4NTMzNH0.aCTMKU8N8zjTVUSpjjs_bcyRnE2-G3lRcQCsmeM4TtU'
);

inventarioApi.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = token;
	}
	return config;
});
