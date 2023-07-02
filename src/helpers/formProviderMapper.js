import { providerState } from '../constants';

export const prepareProviderToSend = provider => ({
	...provider,
	estado: !provider.estado ? providerState.INACTIVO : providerState.ACTIVO,
});
