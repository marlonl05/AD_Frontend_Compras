export const getEnviroments = () => {
	return {
		loginUrl: import.meta.env.VITE_API_LOGIN_URL,
		mode: import.meta.env.VITE_MODE,
	};
};
