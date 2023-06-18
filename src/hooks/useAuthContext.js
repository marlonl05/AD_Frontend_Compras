import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
	const { user, logged, dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		console.log(dispatch);
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
