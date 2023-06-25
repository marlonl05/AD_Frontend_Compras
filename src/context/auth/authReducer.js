import { authTypes } from '../../types/';

export const authReducer = (authState, action) => {
	switch (action.type) {
		case authTypes.LOGIN:
			return {
				...authState,
				user: action.payload,
				logged: true,
			};

		case authTypes.LOGOUT:
			return {
				logged: false,
			};
	}
};
