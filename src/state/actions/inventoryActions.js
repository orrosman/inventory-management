const updateQuantity = (item, current) => {
	return {
		type: 'UPDATE_QUANTITY',
		payload: { item: { ...item }, current },
	};
};

export { updateQuantity };
