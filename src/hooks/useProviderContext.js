import { useContext } from 'react';
import { ProviderContext } from '../context';
import comprasApi from '../api';
import { providerTypes } from '../types';
import { status } from '../constants';
import { mapFormProviderToNormal } from '../helpers';

export const useProviderContext = () => {
	const {
		providerList,
		providerListIds,
		state,
		error,
		message,
		currentProvider,
		defaultTabIndex,
		providerDispatch,
	} = useContext(ProviderContext);

	const handleShowProvider = providerId => {
		providerDispatch({ type: providerTypes.SET_CURRENT_PROVIDER, payload: providerId });
		providerDispatch({ type: providerTypes.SET_DEFAULT_TAB_INDEX, payload: 2 });
	};

	const handleShowEditProvider = providerId => {
		providerDispatch({ type: providerTypes.SET_CURRENT_PROVIDER, payload: providerId });
		providerDispatch({ type: providerTypes.SET_DEFAULT_TAB_INDEX, payload: 3 });
	};

	const handleEditProvider = async provider => {
		console.log('handleEditProvider');
		console.log(provider);
	};

	const handleTabIndex = tabIndex =>
		providerDispatch({ type: providerTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	const handlePrintProvider = () => {
		console.log('handlePrintProvider');
	};

	const handleCreateProvider = async provider => {
		try {
			await comprasApi.post('/ingresar/proveedor', mapFormProviderToNormal(provider));

			providerDispatch({ type: providerTypes.ADD });
		} catch (error) {
			console.error(error);
			handleState(status.FAILED);
		}
	};

	const handleReloadProviders = () => providerDispatch({ type: providerTypes.RELOAD_PROVIDERS });

	const handleState = payload => providerDispatch({ type: providerTypes.SET_STATE, payload });

	return {
		// State
		providerList,
		providerListIds,
		state,
		error,
		message,
		currentProvider,
		defaultTabIndex,

		// Actions
		handleState,
		handleShowProvider,
		handleShowEditProvider,
		handleEditProvider,
		handlePrintProvider,
		handleCreateProvider,
		handleReloadProviders,
		handleTabIndex,
	};
};
