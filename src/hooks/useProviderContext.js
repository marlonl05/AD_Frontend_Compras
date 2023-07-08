/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { toast } from 'sonner';
import { ProviderContext } from '../context';
import comprasApi from '../api';
import { providerTypes } from '../types';
import { status } from '../constants';
import { prepareProviderToSend } from '../helpers';

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

	const handleSetCurrentProvider = providerId => {
		providerDispatch({ type: providerTypes.SET_CURRENT_PROVIDER, payload: providerId });
		providerDispatch({ type: providerTypes.SET_DEFAULT_TAB_INDEX, payload: 1 });
	};

	const handleEditProvider = providerRequest => {
		const provider = prepareProviderToSend(providerRequest);

		const request = comprasApi.put(`/proveedores/${providerRequest.id}`, provider);

		toast.promise(request, {
			loading: 'Actualizando proveedor...',
			success: data => {
				providerDispatch({ type: providerTypes.ADD });
				return 'Proveedor actualizado exitosamente.';
			},
			error: message => {
				handleState(status.FAILED);
				return 'Error al actualizar proveedor!';
			},
		});
	};

	const handleTabIndex = tabIndex =>
		providerDispatch({ type: providerTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	const handleCreateProvider = providerRequest => {
		const provider = prepareProviderToSend(providerRequest);
		// await comprasApi.post('/ingresar/proveedor', provider);
		const request = comprasApi.post('/proveedores', provider);

		toast.promise(request, {
			loading: 'Creando proveedor...',
			success: response => {
				providerDispatch({ type: providerTypes.ADD });
				return 'Proveedor creado exitosamente.';
			},
			error: message => {
				handleState(status.FAILED);
				return 'Error al crear proveedor!';
			},
		});
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
		handleSetCurrentProvider,
		handleEditProvider,
		handleCreateProvider,
		handleReloadProviders,
		handleTabIndex,
	};
};
