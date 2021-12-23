const updateQuantity = (item, current) => {
	return {
		type: 'UPDATE_QUANTITY',
		payload: { item: { ...item }, current },
	};
};

const addNewItem = (item) => {
	return {
		type: 'ADD_NEW_ITEM',
		payload: { item: { ...item } },
	};
};

const removeItem = (name) => {
	return {
		type: 'REMOVE_ITEM',
		payload: { itemName: name },
	};
};

export { updateQuantity, addNewItem, removeItem };
