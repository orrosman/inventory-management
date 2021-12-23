const addNewUser = (user) => {
	return {
		type: 'ADD_NEW_USER',
		payload: { user: { ...user } },
	};
};

const updateUser = (user) => {
	return {
		type: 'UPDATE_USER',
		payload: { user: { ...user } },
	};
};

export { updateUser, addNewUser };
