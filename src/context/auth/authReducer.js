import { status } from '../../constants';
import { mapListToObject } from '../../helpers';
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

		case authTypes.LOAD_AUDIT_AND_PERMISSIONS:
			return {
				...authState,
				audit: mapListToObject(action.payload.audit),
				permissions: action.payload.permissions,
			};

		case authTypes.SET_CURRENT_AUDIT:
			return {
				...authState,
				currentAudit: action.payload,
			};

		case authTypes.SET_DEFAULT_TAB_INDEX:
			return {
				...authState,
				defaultTabIndex: action.payload,
			};

		case authTypes.RELOAD_AUDIT_AND_PERMISSIONS:
			return {
				...authState,
				refreshCounter: authState.refreshCounter + 1,
			};

		default:
			return authState;
	}
};
