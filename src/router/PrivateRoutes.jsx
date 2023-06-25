import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from '../layout/Layout';
import { useAuthContext } from '../hooks/';

export const PrivateRoutes = ({ children }) => {
	const { logged } = useAuthContext();

	const redirectTo = '/login';

	if (!logged) return <Navigate to={redirectTo} replace />;

	return <Layout>{children || <Outlet />}</Layout>;
};

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};
