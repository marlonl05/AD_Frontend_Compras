import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from '../layout/Layout';
import { useAuthContext } from '../hooks/';

export const PrivateRoutes = ({ children }) => {
	const { logged } = useAuthContext();
	const { pathname, search } = useLocation();

	const lastPath = pathname + search;
	const redirectTo = '/login';

	localStorage.setItem('lastPath', lastPath);

	if (!logged) return <Navigate to={redirectTo} replace />;

	return <Layout>{children || <Outlet />}</Layout>;
};

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};
