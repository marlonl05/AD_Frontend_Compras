import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { Home, Providers, Shopping } from '../pages';

export const AppRouter = () => {
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
