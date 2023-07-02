import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { useProviderContext, useShoppingContext } from '../../../hooks';

export const Notifications = () => {
	const { message: providerMessage, error: providerError } = useProviderContext();
	const { message: shoppingMessage, error: shoppingError } = useShoppingContext();

	useEffect(() => {
		if (providerMessage) toast.success(providerMessage);
		if (shoppingMessage) toast.success(shoppingMessage);
	}, [providerMessage, shoppingMessage]);

	useEffect(() => {
		if (providerError) toast.error(providerError);
		if (shoppingError) toast.error(shoppingError);
	}, [providerError, shoppingError]);

	return <Toaster richColors />;
};
