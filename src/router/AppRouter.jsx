import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Providers, Shopping, Audit } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';
import Loginn from '../pages/Loginn/Loginn';
import { useAuthContext } from '../hooks';
import { status } from '../constants';

export const AppRouter = () => {
	const { state, handleCheckAuth } = useAuthContext();

	useEffect(() => {
		handleCheckAuth();
	}, []);

	const defaultPath = state === status.FAILED || state === status.IDLE ? '/login' : '/';

	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/login' element={<Loginn />} />
			{/* Private routes */}
			<Route element={<PrivateRoutes />}>
				<Route path='/compras' element={<Shopping />} />
				<Route path='/proveedores' element={<Providers />} />
				<Route path='/auditoria' element={<Audit />} />
			</Route>

			<Route path='*' element={<Navigate to={defaultPath} />} />
		</Routes>
	);
};
