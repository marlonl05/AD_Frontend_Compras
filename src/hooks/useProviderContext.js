import { useContext } from 'react';
import { ProviderContext } from '../context';
import comprasApi from '../api';
import { providerTypes } from '../types';
import { status } from '../constants';

export const useProviderContext = () => {
	const {
		providerList,
		providerListIds,
		state,
		error,
		message,
		currentProvider,
		providerDispatch,
	} = useContext(ProviderContext);

	const handleShowProvider = () => {
		console.log('handleShowProvider');
	};

	const handleEditProvider = () => {
		console.log('handleEditProvider');
	};

	const handlePrintProvider = () => {
		console.log('handlePrintProvider');
	};

	const handleCreateProvider = async provider => {
		provider.documento_identificacion = provider.documento_de_identificacion;
		provider.nombre = provider.nombres_completos;
		provider.estado = provider.estado_del_proveedor;

		delete provider.documento_de_identificacion;
		delete provider.estado_del_proveedor;
		delete provider.nombres_completos;

		try {
			await comprasApi.post('/ingresar/proveedor', provider);

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

		// Actions
		handleState,
		handleShowProvider,
		handleEditProvider,
		handlePrintProvider,
		handleCreateProvider,
		handleReloadProviders,
	};
};
