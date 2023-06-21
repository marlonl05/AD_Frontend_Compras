import axios from 'axios';
import { getEnviroments } from '../helpers';

const { VITE_API_URL } = getEnviroments();

const comprasApi = axios.create({
	baseURL: VITE_API_URL,
});

export default comprasApi;
