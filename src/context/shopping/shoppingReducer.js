import { shoppingTypes } from '../../types/shoppingTypes';

export const shoppingReducer = (shoppingState, action) => {
	switch (action.type) {
		case shoppingTypes.LOAD: {
			// todo: transform the payload to the correct format like objects
			return {
				...shoppingState,
				shoppingList: action.payload,
			};
		}
		default:
			return shoppingState;
	}
};
