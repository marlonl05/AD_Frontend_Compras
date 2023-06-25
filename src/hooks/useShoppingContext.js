import { useContext } from 'react';
import { ShoppingContext } from '../context';
import { shoppingTypes } from '../types';

export const useShoppingContext = () => {
	const {
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartList,
		currentShopping,
		currentSidebarShopping,
		shoppingDispatch,
	} = useContext(ShoppingContext);

	const handleShowShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SIDEBAR_SHOPPING, payload: +shoppingId });
	};

	const handleEditShopping = () => {
		console.log('handleEditShopping');
	};

	const handlePrintShopping = () => {
		console.log('handlePrintShopping');
	};

	return {
		// State
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartList,
		currentShopping,
		currentSidebarShopping,

		// Actions
		handleShowShopping,
		handleEditShopping,
		handlePrintShopping,
	};
};
