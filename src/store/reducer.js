import { CHANGE_USERINFO, CHANGE_USER_ID, CLEAR_USERINFO,CHANGE_TOKEN } from "./actionTypes";

const defaultState = {
	user_id: null,
	userInfo: null,
	token:null
};

export default (state = defaultState, action) => {
	console.log(action)
	switch (action.type) {
		case CHANGE_USERINFO:
			state.userInfo = action.userInfo;
			break;
		case CHANGE_USER_ID:
			state.user_id = action.id;
			break;
		case CLEAR_USERINFO:
			state.user_id = null;
			state.userInfo =null;
			break;
		case CHANGE_TOKEN:
			state.token=action.token
		default:
			return state;
	}
	return state;
};

