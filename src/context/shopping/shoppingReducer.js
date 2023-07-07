/* eslint-disable camelcase */
import { status } from '../../constants';
import { mapListToObject, mapObjectToListIds } from '../../helpers';
import { shoppingTypes } from '../../types/shoppingTypes';

export const shoppingReducer = (shoppingState, action) => {
	switch (action.type) {
		case shoppingTypes.LOAD: {
			return {
				...shoppingState,
				shoppingList: mapListToObject(action.payload),
				shoppingListIds: mapObjectToListIds(action.payload),
				state: status.COMPLETED,
			};
		}

		case shoppingTypes.SET_CURRENT_SHOPPING: {
			return {
				...shoppingState,
				currentShopping: action.payload,
			};
		}

		case shoppingTypes.SET_STATE: {
			return {
				...shoppingState,
				state: action.payload,
			};
		}

		case shoppingTypes.SET_DEFAULT_TAB_INDEX: {
			return {
				...shoppingState,
				defaultTabIndex: action.payload,
			};
		}

		case shoppingTypes.SET_MESSAGES: {
			const message = action?.payload?.message;
			const error = action?.payload?.error;

			return {
				...shoppingState,
				message,
				error,
			};
		}

		case shoppingTypes.SET_CART_DETAILS: {
			return {
				...shoppingState,
				cartDetails: action.payload,
			};
		}

		case shoppingTypes.SET_NEW_PRODUCT_TO_CART: {
			const newProduct = action.payload;
			const cartDetails = shoppingState.cartDetails;

			const total = cartDetails?.total + newProduct?.total;
			const detalles = [...cartDetails?.detalles, newProduct];

			return {
				...shoppingState,
				cartDetails: {
					total: Math.round(total * 100) / 100,
					detalles,
				},
			};
		}

		case shoppingTypes.SET_DELETE_PRODUCT_FROM_CART: {
			const productId = action.payload;
			const cartDetails = shoppingState.cartDetails;

			const productToDelete = cartDetails?.detalles.find(
				({ producto_id }) => producto_id === productId
			);

			const detalles = cartDetails?.detalles.filter(({ producto_id }) => producto_id !== productId);

			const total = cartDetails?.total - productToDelete?.total;

			return {
				...shoppingState,
				cartDetails: {
					total: Math.round(total * 100) / 100,
					detalles,
				},
			};
		}

		default:
			return shoppingState;
	}
};
