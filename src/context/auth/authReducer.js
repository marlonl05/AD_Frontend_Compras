import { status } from '../../constants';
import { authTypes } from '../../types/';

export const authReducer = (authState, action) => {
	switch (action.type) {
		case authTypes.LOGIN:
			return {
				...authState,
				state: status.COMPLETED,
				user: action.payload,
				logged: true,
			};

		case authTypes.LOGOUT:
			return {
				logged: false,
				user: null,
				state: status.IDLE,
			};

		case authTypes.SET_STATE:
			return {
				...authState,
				state: action.payload,
			};

		default:
			return authState;
	}
};
