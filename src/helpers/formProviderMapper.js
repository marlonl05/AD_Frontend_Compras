import { format } from 'date-fns';
import { providerState, shoppingState } from '../constants';

export const prepareProviderToSend = provider => ({
	...provider,
	estado: !provider.estado ? providerState.INACTIVO : providerState.ACTIVO,
});

export const prepareShoppingToCreate = (shopping, cart) => ({
	...shopping,
	estado: shoppingState.ACTIVO,
	detalles: cart.detalles,
	total: cart.total,
	fecha_factura: format(new Date(), 'yyyy-MM-dd'),
});
