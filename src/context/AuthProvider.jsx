/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

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
	const [auth, dispatch] = useReducer(authReducer, initialState, init);

	return (
		<AuthContext.Provider
			value={{
				...auth,
				authDispatch: dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
