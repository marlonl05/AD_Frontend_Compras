/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import { ProviderContext } from '../';
import { status } from '../../constants';
import { providerReducer } from './';
import comprasApi from '../../api';
import { providerTypes } from '../../types';

const initalState = {
	providerList: {},
	providerListIds: [],
	state: status.IDLE,
	error: null,
	message: null,
	currentProvider: null,
	refreshCounter: 0,
};

export const ProviderProvider = ({ children }) => {
	const [provider, providerDispatch] = useReducer(providerReducer, initalState);

	const { refreshCounter } = provider;

	const init = async () => {
		try {
			providerDispatch({ type: providerTypes.SET_STATE, payload: status.LOADING });

			const { data } = await comprasApi.get('/proveedores');

			if (!data?.response) throw new Error('Error al cargar los proveedores');

			providerDispatch({
				type: providerTypes.LOAD,
				payload: data.response,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		init();
	}, [refreshCounter]);

	return (
		<ProviderContext.Provider value={{ ...provider, providerDispatch }}>
			{children}
		</ProviderContext.Provider>
	);
};
