import { GlobalProvider } from './context/GlobalProvider';
import { AppRouter } from './router/AppRouter';

export const App = () => {
	return (
		<div className='bg-dark-100 w-full min-h-screen'>
			<GlobalProvider>
				<AppRouter />
			</GlobalProvider>
		</div>
	);
};
