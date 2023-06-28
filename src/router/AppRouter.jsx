import { toast } from 'sonner';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useProviderContext, useShoppingContext } from '../hooks';
import { Home, Providers, Shopping } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
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

	return (
		<Routes>
			<Route index element={<Home />} />
			{/* Private routes */}
			<Route element={<PrivateRoutes />}>
				<Route path='/compras' element={<Shopping />} />
				<Route path='/proveedores' element={<Providers />} />
			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
