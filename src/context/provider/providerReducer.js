import { status } from '../../constants';
import { providerTypes } from '../../types';

export const providerReducer = (providerState, { type, payload }) => {
	switch (type) {
		case providerTypes.LOAD: {
			return {
				...providerState,
				providerList: payload,
				state: status.COMPLETED,
			};
		}

		default:
			return providerState;
	}
};
