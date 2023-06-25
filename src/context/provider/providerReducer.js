import { status } from '../../constants';
import { mapListToObject, mapObjectToListIds } from '../../helpers';
import { providerTypes } from '../../types';

export const providerReducer = (providerState, { type, payload }) => {
	switch (type) {
		case providerTypes.LOAD: {
			return {
				...providerState,
				providerList: mapListToObject(payload),
				providerListIds: mapObjectToListIds(payload),
				state: status.COMPLETED,
			};
		}

		case providerTypes.SET_STATE: {
			return {
				...providerState,
				state: payload,
			};
		}

		default:
			return providerState;
	}
};
