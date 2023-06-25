import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuthContext = () => {
	const { user, logged, authDispatch } = useContext(AuthContext);

	const handleLogin = () => {
		console.log('logging in');
	};

	const handleLogout = () => {
		console.log('logging out');
	};

	return {
		user,
		logged,
		handleLogin,
		handleLogout,
	};
};
