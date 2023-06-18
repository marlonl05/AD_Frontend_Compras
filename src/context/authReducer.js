import { types } from '../types/types';

export const authReducer = (auth, action) => {
	switch (action.type) {
		case types.login:
			return {
				...auth,
				user: action.payload,
				logged: true,
			};

		case types.logout:
			return {
				logged: false,
			};
	}
};
