import { CHANGE_USERINFO, CHANGE_USER_ID, CLEAR_USERINFO } from "./actionTypes";

const defaultState = {
	user_id: null,
	userInfo: null,
};

export default (state = defaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case CHANGE_USERINFO:
			newState.userInfo = action.userInfo;
			break;
		case CHANGE_USER_ID:
			newState.user_id = action.id;
			break;
		case CLEAR_USERINFO:
			newState.user_id = null;
			newState.userInfo =null;
			break;
		default:
			return newState;
	}
	return newState;
};

