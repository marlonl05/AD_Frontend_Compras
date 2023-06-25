import { useContext } from 'react';
import { ShoppingContext } from '../context';

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
	} = useContext(ShoppingContext);

	const handleShowShopping = () => {
		console.log('handleShowShopping');
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
