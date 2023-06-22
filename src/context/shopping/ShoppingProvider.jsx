/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { shoppingReducer } from './shoppingReducer';

export const ShoppingContext = createContext();

const initialState = {
	shoppingList: {},
	cart: [],
	currentShopping: null,
	shoppingState: null,
};

export const ShoppingProvider = ({ children }) => {
	const [shopping, dispatch] = useReducer(shoppingReducer, initialState);

	return (
		<ShoppingContext.Provider
			value={{
				...shopping,
				shoppingDispatch: dispatch,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};
