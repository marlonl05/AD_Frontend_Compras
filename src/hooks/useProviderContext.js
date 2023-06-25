import { useContext } from 'react';
import { ProviderContext } from '../context';

export const useProviderContext = () => {
	const { providerList, providerListIds, state, error, message, currentProvider } =
		useContext(ProviderContext);

	const handleShowProvider = () => {
		console.log('handleShowProvider');
	};

	const handleEditProvider = () => {
		console.log('handleEditProvider');
	};

	const handlePrintProvider = () => {
		console.log('handlePrintProvider');
	};

	return {
		// State
		providerList,
		providerListIds,
		state,
		error,
		message,
		currentProvider,

		// Actions
		handleShowProvider,
		handleEditProvider,
		handlePrintProvider,
	};
};
