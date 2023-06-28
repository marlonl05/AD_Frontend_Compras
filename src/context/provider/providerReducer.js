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
				state: status.IDLE,
			};
		}

		case providerTypes.ADD: {
			return {
				...providerState,
				state: status.COMPLETED,
			};
		}

		case providerTypes.RELOAD_PROVIDERS: {
			return {
				...providerState,
				refreshCounter: providerState.refreshCounter + 1,
			};
		}

		case providerTypes.SET_MESSAGES: {
			const message = payload?.message;
			const error = payload?.error;

			return {
				...providerState,
				message,
				error,
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
