import { shoppingTypes } from '../../types/shoppingTypes';

export const shoppingReducer = (state, action) => {
	switch (action.type) {
		case shoppingTypes.addShopping: {
			const shoppingList = { ...state.shoppingList };
			shoppingList[action.payload.id] = action.payload;
			return {
				...state,
				shoppingList,
			};
		}
		default:
			return state;
	}
};
