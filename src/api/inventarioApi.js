import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_INVENTARIO_URL } = getEnviroments();

export const inventarioApi = axios.create({
	baseURL: VITE_API_INVENTARIO_URL,
});
