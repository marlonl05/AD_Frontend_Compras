import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ isAllowed, redirectTo = '/auth/login', children }) => {
	if (!isAllowed) return <Navigate to={redirectTo} replace />;

	return children || <Outlet />;
};

ProtectedRoute.propTypes = {
	isAllowed: PropTypes.bool.isRequired,
	redirectTo: PropTypes.string,
	children: PropTypes.node,
};
