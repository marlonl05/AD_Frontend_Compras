/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { shoppingReducer } from './shoppingReducer';
import { status } from '../../constants';

export const ShoppingContext = createContext();

const initialState = {
	shoppingList: {},
	state: status.IDLE,
	error: null,
	message: null,
	cartList: [],
	currentShopping: null,
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
