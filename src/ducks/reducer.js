const INITIAL_STATE = {
	id: 1,
	username: "",
	profilePic: ""
};

const UPDATE_STATE = "UPDATE_STATE";
export function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_STATE:
			return action.payload;
		default:
			return state;
	}
}

export function updateState(id, username, profilePic) {
	return {
		type: UPDATE_STATE,
		payload: { id, username, profilePic }
	};
}
