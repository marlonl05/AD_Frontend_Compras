import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../pages/Dashboard';

export const AppRouter = () => {
	const isAuthenticated = true;
	const login = 'localhost:3000/login';

	return (
		<Routes>
			{/* Private routes */}
			<Route element={<ProtectedRoute isAllowed={isAuthenticated} redirectTo={login} />}>
				<Route path='/compras' element={<Dashboard />} />
			</Route>

			<Route path='/*' element={<Navigate to={login} />} />
		</Routes>
	);
};
