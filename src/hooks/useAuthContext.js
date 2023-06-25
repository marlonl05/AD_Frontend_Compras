import { useContext } from 'react';
import { AuthContext } from '../context';
import { authTypes } from '../types';

export const useAuthContext = () => {
	const { user, logged, authDispatch } = useContext(AuthContext);

	const handleLogin = () => {
		console.log('logging in');
	};

	const handleLogout = () => {
		console.log('logging out');

		localStorage.removeItem('user');
		authDispatch({
			type: authTypes.LOGOUT,
		});
	};

	return {
		user,
		logged,
		handleLogin,
		handleLogout,
	};
};
