import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { Shopping } from '../pages';

export const AppRouter = () => {
	return (
		<Routes>
			{/* Private routes */}
			<Route element={<PrivateRoutes />}>
				<Route path='/compras' element={<Shopping />} />
			</Route>

			<Route path='*' element={<Navigate to='/compras' />} />
		</Routes>
	);
};
