/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { AuthContext } from '../';
import { authReducer } from './';
import { status } from '../../constants';
import comprasApi from '../../api';
import { authTypes } from '../../types';

const initialState = {
	logged: false,
	user: null,
	state: status.IDLE,
	auditoria: [],
	refreshCounter: 0,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = localStorage.getItem('token');
	const logged = !!user && !!token;

	return {
		logged,
		user,
		state: logged ? status.COMPLETED : status.IDLE,
		auditoria: [],
		currentAudit: null,
		refreshCounter: 0,
		defaultTabIndex: 0,
	};
};

export const AuthProvider = ({ children }) => {
	const [auth, authDispatch] = useReducer(authReducer, initialState, init);

	const { refreshCounter, state, logged } = auth;

	const initFetchExtraData = async () => {
		try {
			const { data } = await comprasApi.get('/auditoria');

			if (!data?.data) throw new Error('Error al cargar las auditoria');

			authDispatch({
				type: authTypes.LOAD_AUDIT_AND_PERMISSIONS,
				payload: {
					audit: data.data,
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (!logged) return;

		if (state !== status.COMPLETED) return;

		initFetchExtraData();
	}, [refreshCounter, state, logged]);

	return <AuthContext.Provider value={{ ...auth, authDispatch }}>{children}</AuthContext.Provider>;
};
