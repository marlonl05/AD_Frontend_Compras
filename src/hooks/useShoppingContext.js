import { useContext } from 'react';
import { ProductContext, ShoppingContext } from '../context';
import { shoppingTypes } from '../types';

export const useShoppingContext = () => {
	const {
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartDetails,
		currentShopping,
		shoppingDispatch,
		defaultTabIndex,
	} = useContext(ShoppingContext);

	const productList = useContext(ProductContext);

	const handleShowShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SIDEBAR_SHOPPING, payload: +shoppingId });
	};

	const handleEditShopping = shoppingRequest => {
		console.log('handleEditShopping', { shoppingRequest });
	};

	const handleAddShopping = shoppingRequest => {
		console.log('handleAddShopping', { shoppingRequest });
	};

	const handlePrintShopping = () => {
		console.log('handlePrintShopping');
	};

	const handleTabIndex = tabIndex =>
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: tabIndex });

	const handleSetCurrentShopping = shoppingId => {
		shoppingDispatch({ type: shoppingTypes.SET_CURRENT_SHOPPING, payload: shoppingId });
		shoppingDispatch({ type: shoppingTypes.SET_DEFAULT_TAB_INDEX, payload: 1 });

		const shopping = shoppingList[shoppingId];

		if (!shopping) return shoppingDispatch({ type: shoppingTypes.SET_CART_DETAILS, payload: {} });

		const { total, detalles } = shopping;

		shoppingDispatch({
			type: shoppingTypes.SET_CART_DETAILS,
			payload: {
				total,
				detalles,
			},
		});
	};

	const handleShowMessage = (message, type) => {
		shoppingDispatch({
			type: shoppingTypes.SET_MESSAGES,
			payload: type === 'error' ? { error: message } : { message },
		});
	};

	return {
		// State
		shoppingList,
		shoppingListIds,
		state,
		error,
		message,
		cartDetails,
		currentShopping,
		defaultTabIndex,
		productList,

		// Actions
		handleTabIndex,
		handleShowShopping,
		handleEditShopping,
		handleAddShopping,
		handlePrintShopping,
		handleSetCurrentShopping,
		handleShowMessage,
	};
};
