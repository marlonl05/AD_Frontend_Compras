/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { ProviderContext } from '../';
import { status } from '../../constants';
import { providerReducer } from './';

const initalState = {
	providerList: [],
	state: status.IDLE,
	error: null,
	message: null,
	currentProvider: null,
};

export const ProviderProvider = ({ children }) => {
	const [provider, providerDispatch] = useReducer(providerReducer, initalState);

	return (
		<ProviderContext.Provider value={{ ...provider, providerDispatch }}>
			{children}
		</ProviderContext.Provider>
	);
};
