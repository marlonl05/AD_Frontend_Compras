import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Providers, Shopping } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';
import Loginn from '../pages/Loginn/Loginn';

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/login' element={<Loginn />} />
			{/* Private routes */}
			<Route element={<PrivateRoutes />}>
				<Route path='/compras' element={<Shopping />} />
				<Route path='/proveedores' element={<Providers />} />
			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
