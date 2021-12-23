const inventoryReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_QUANTITY':
			const { current } = action.payload;
			const { name, fullQuantity } = action.payload.item;

			if (current >= 0) {
				const index = state.inventory.findIndex((item) => item.name === name);
				const newInventory = [...state.inventory];
				if (current < fullQuantity) {
					newInventory[index].missing = fullQuantity - current;
				} else {
					newInventory[index].missing = 0;
				}

				return {
					...state,
					inventory: newInventory,
				};
			} else {
				return state;
			}

		default:
			return state;
	}
};

export default inventoryReducer;
