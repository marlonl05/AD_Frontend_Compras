/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { AuthContext } from '../';
import { authReducer } from './';
import { status } from '../../constants';

const initialState = {
	logged: false,
	user: null,
	state: status.IDLE,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = localStorage.getItem('token');
	const logged = !!user && !!token;

	return {
		logged,
		user,
		state: logged ? status.COMPLETED : status.IDLE,
	};
};

export const AuthProvider = ({ children }) => {
	const [auth, authDispatch] = useReducer(authReducer, initialState, init);

	return <AuthContext.Provider value={{ ...auth, authDispatch }}>{children}</AuthContext.Provider>;
};
