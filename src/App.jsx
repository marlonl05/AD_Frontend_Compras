import { AuthProvider } from './context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const App = () => {
	return (
		<div className='bg-dark-100 w-full min-h-screen'>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</div>
	);
};
