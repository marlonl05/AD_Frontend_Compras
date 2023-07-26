import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AuthContext } from '../context';
import { authTypes } from '../types';
import comprasApi from '../api';
import { status } from '../constants';

const allPermissions = {
	facturas: false,
	proveedores: false,
	auditoria: false,
};

export const useAuthContext = () => {
	const {
		user,
		logged,
		state,
		audit,
		permissions,
		currentAudit,
		refreshCounter,
		defaultTabIndex,
		authDispatch,
	} = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = ({ usuario, password }) => {
		const lastPath = localStorage.getItem('lastPath') || '/';

		authDispatch({
			type: authTypes.SET_STATE,
			payload: status.LOADING,
		});

		const request = comprasApi.post('/compras/login', { usuario, password });

		toast.promise(request, {
			loading: 'Iniciando sesión...',
			success: ({ data }) => {
				const {
					user,
					authorization: { token },
					permisos,
					tokenInventario,
				} = data;

				allPermissions.auditoria = false;
				allPermissions.proveedores = false;
				allPermissions.facturas = false;

				Object.values(permisos).forEach(permission => {
					if (permission === 'Auditoria') allPermissions.auditoria = true;
					else if (permission === 'Proveedores') allPermissions.proveedores = true;
					else if (permission === 'Facturas') allPermissions.facturas = true;
				});

				localStorage.setItem('token', token);
				localStorage.setItem('tokenInventario', tokenInventario);
				localStorage.setItem('token-init-date', new Date().getTime());
				localStorage.setItem('user', JSON.stringify(user));
				localStorage.setItem('permisos', JSON.stringify(allPermissions));

				authDispatch({
					type: authTypes.LOGIN,
					payload: { user, permissions: allPermissions },
				});

				navigate(lastPath, { replace: true });
				return 'Bienvenido!';
			},
			error: err => {
				console.error(err);
				authDispatch({
					type: authTypes.SET_STATE,
					payload: status.FAILED,
				});
				return 'Falló la autenticación!';
			},
		});
	};

	const handleLogout = () => {
		const request = comprasApi.post('/logout');

		toast.promise(request, {
			loading: 'Cerrando sesión...',
			success: () => {
				localStorage.clear();

				const action = { type: authTypes.LOGOUT };
				authDispatch(action);
				navigate('/login', { replace: true });
				return 'Hasta luego!';
			},
			error: err => {
				localStorage.clear();

				console.error(err);
				return 'Falló el cierre de sesión';
			},
		});
	};

	const handleCheckAuth = async () => {
		const token = localStorage.getItem('token');
		const user = JSON.parse(localStorage.getItem('user'));

		if (!token || !user) {
			localStorage.clear();

			const action = { type: authTypes.LOGOUT };
			authDispatch(action);
			navigate('/login', { replace: true });

			return;
		}

		try {
			const { data } = await comprasApi.post('/refresh');
			const lastPath = localStorage.getItem('lastPath') || '/';

			const {
				user,
				authorisation: { token },
			} = data;

			localStorage.setItem('token', token);
			localStorage.setItem('token-init-date', new Date().getTime());
			localStorage.setItem('user', JSON.stringify(user));

			const permissions = JSON.parse(localStorage.getItem('permisos')) || {
				facturas: true,
				proveedores: true,
				auditoria: true,
			};

			console.log();

			authDispatch({
				type: authTypes.LOGIN,
				payload: {
					user,
					permissions,
				},
			});

			navigate(lastPath, { replace: true });
		} catch (error) {
			localStorage.clear();

			const action = { type: authTypes.LOGOUT };
			authDispatch(action);
			navigate('/login', { replace: true });
		}
	};

	const handleSetCurrentAudit = auditId => {
		authDispatch({ type: authTypes.SET_CURRENT_AUDIT, payload: auditId });
		authDispatch({ type: authTypes.SET_DEFAULT_TAB_INDEX, payload: 1 });
	};

	const handleRefreshExtraData = () =>
		authDispatch({ type: authTypes.RELOAD_AUDIT_AND_PERMISSIONS });

	const handleTabIndex = tabIndex =>
		authDispatch({ type: authTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	return {
		// State
		user,
		logged,
		state,
		audit,
		currentAudit,
		refreshCounter,
		defaultTabIndex,
		permissions,

		// Actions
		handleLogin,
		handleLogout,
		handleTabIndex,
		handleCheckAuth,
		handleSetCurrentAudit,
		handleRefreshExtraData,
	};
};
