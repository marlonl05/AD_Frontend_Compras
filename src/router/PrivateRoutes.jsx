import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../hooks/useAuthContext';
import { Layout } from '../layout/Layout';

export const PrivateRoutes = ({ children }) => {
	const { logged, user } = useAuthContext();
	const redirectTo = '/login';

	console.log({ logged, user });

	if (!logged) return <Navigate to={redirectTo} replace />;

	return <Layout>{children || <Outlet />}</Layout>;
};

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};
