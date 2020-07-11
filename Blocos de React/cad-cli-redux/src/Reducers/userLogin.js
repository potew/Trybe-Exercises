import { USER_AUTHENTICATED } from "../Actions/index";

// Reducer de login
const INITIAL_STATE = {
	loggedInUser: ''
};

const loginReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_AUTHENTICATED: {
			return action.user
		}
		default:
			return state;
	}
}

export default loginReducer;
