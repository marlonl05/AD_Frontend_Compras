/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { AuthContext } from '../';
import { authReducer } from './';

const initialState = {
	logged: false,
};

const init = () => {
	// const user = JSON.parse(localStorage.getItem('user'));

	// return {
	// 	logged: !!user,
	// 	user,
	// };

	return {
		user: {
			id: 1,
			name: 'Luis',
		},
		logged: true,
	};
};

export const AuthProvider = ({ children }) => {
	const [auth, authDispatch] = useReducer(authReducer, initialState, init);

	return <AuthContext.Provider value={{ ...auth, authDispatch }}>{children}</AuthContext.Provider>;
};
