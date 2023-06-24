import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { Home, Shopping } from '../pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			{/* Private routes */}
			<Route element={<PrivateRoutes />}>
				<Route path='/compras' element={<Shopping />} />
				<Route path='/proveedores' element={<p>proveedores</p>} />
			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
