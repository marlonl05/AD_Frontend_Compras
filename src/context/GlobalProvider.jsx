import { AuthProvider } from './auth';
import { ProviderProvider } from './provider';
import { ShoppingProvider } from './shopping';

/* eslint-disable react/prop-types */
export const GlobalProvider = ({ children }) => {
	return (
		<AuthProvider>
			<ShoppingProvider>
				<ProviderProvider>{children}</ProviderProvider>
			</ShoppingProvider>
		</AuthProvider>
	);
};
