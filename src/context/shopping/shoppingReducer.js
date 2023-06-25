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
		case shoppingTypes.SET_STATE: {
			return {
				...shoppingState,
				state: action.payload,
			};
		}
		default:
			return shoppingState;
	}
};
