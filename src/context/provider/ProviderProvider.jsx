/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { ProviderContext } from '../';
import { status } from '../../constants';
import { providerReducer } from './';
import comprasApi from '../../api';
import { providerTypes } from '../../types';
import { useAuthContext } from '../../hooks/useAuthContext';

const initalState = {
	providerList: {},
	providerListIds: [],
	state: status.IDLE,
	error: null,
	message: null,
	currentProvider: null,
	refreshCounter: 0,
	defaultTabIndex: 0,
};

export const ProviderProvider = ({ children }) => {
	const [provider, providerDispatch] = useReducer(providerReducer, initalState);
	const { state, logged } = useAuthContext();

	const { refreshCounter } = provider;

	const init = async () => {
		try {
			providerDispatch({ type: providerTypes.SET_STATE, payload: status.LOADING });

			const { data } = await comprasApi.get('/proveedores');

			if (!data?.data) throw new Error('Error al cargar los proveedores');

			providerDispatch({
				type: providerTypes.LOAD,
				payload: data.data,
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (!logged) return;

		if (state !== status.COMPLETED) return;

		init();
	}, [refreshCounter, state, logged]);

	return (
		<ProviderContext.Provider value={{ ...provider, providerDispatch }}>
			{children}
		</ProviderContext.Provider>
	);
};
