import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../hooks/useAuthContext';
import { Layout } from '../layout/Layout';
import { DashboardLayout } from '../layout/DashboardLayout';

export const PrivateRoutes = ({ children }) => {
	const { logged, user } = useAuthContext();
	const redirectTo = '/login';

	console.log({ logged, user });

	if (!logged) return <Navigate to={redirectTo} replace />;

	return (
		<Layout>
			<DashboardLayout>{children || <Outlet />}</DashboardLayout>
		</Layout>
	);
};

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};
