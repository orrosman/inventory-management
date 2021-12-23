const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_NEW_USER':
			const newUser = action.payload.user;

			return {
				...state,
				user: { ...newUser },
			};

		case 'UPDATE_USER':
			const updatedUser = action.payload.user;
			return {
				...state,
				user: { ...updatedUser },
			};

		default:
			return state;
	}
};

export default userReducer;
