import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AuthContext } from '../context';
import { authTypes } from '../types';
import comprasApi from '../api';
import { status } from '../constants';

export const useAuthContext = () => {
	const { user, logged, state, authDispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = ({ email, password }) => {
		const lastPath = localStorage.getItem('lastPath') || '/';

		authDispatch({
			type: authTypes.SET_STATE,
			payload: status.LOADING,
		});

		const request = comprasApi.post('/login', { email, password });

		toast.promise(request, {
			loading: 'Iniciando sesión...',
			success: ({ data }) => {
				const {
					user,
					authorization: { token },
				} = data;

				localStorage.setItem('token', token);
				localStorage.setItem('token-init-date', new Date().getTime());
				localStorage.setItem('user', JSON.stringify(user));

				authDispatch({
					type: authTypes.LOGIN,
					payload: user,
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

			authDispatch({
				type: authTypes.LOGIN,
				payload: user,
			});

			navigate(lastPath, { replace: true });
		} catch (error) {
			localStorage.clear();

			const action = { type: authTypes.LOGOUT };
			authDispatch(action);
			navigate('/login', { replace: true });
		}
	};

	return {
		// State
		user,
		logged,
		state,

		// Actions
		handleLogin,
		handleLogout,
		handleCheckAuth,
	};
};
