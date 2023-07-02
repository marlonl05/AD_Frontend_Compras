import { AuthProvider } from './auth';
import { ProductProvider } from './products';
import { ProviderProvider } from './provider';
import { ShoppingProvider } from './shopping';

/* eslint-disable react/prop-types */
export const GlobalProvider = ({ children }) => {
	return (
		<AuthProvider>
			<ProductProvider>
				<ShoppingProvider>
					<ProviderProvider>{children}</ProviderProvider>
				</ShoppingProvider>
			</ProductProvider>
		</AuthProvider>
	);
};
