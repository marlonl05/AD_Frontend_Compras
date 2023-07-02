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
		defaultTabIndex,
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

	const handleTabIndex = tabIndex =>
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	const handleSetCurrentShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SHOPPING, payload: shoppingId });
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: 1 });
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
		defaultTabIndex,

		// Actions
		handleTabIndex,
		handleShowShopping,
		handleEditShopping,
		handlePrintShopping,
		handleSetCurrentShopping,
	};
};
