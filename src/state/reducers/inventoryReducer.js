import { fullEquipmentList } from '../../data/db';
import { Notyf } from 'notyf';

const notyf = new Notyf({
	duration: 3000,
});

const inventoryReducer = (state = { inventory: fullEquipmentList }, action) => {
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

		case 'ADD_NEW_ITEM':
			const newItemName = action.payload.item.name;
			const newItemQuantity = action.payload.item.fullQuantity;

			const isInList = state.inventory.some(
				(item) => item.name.toLowerCase() === newItemName.toLowerCase()
			);

			if (!isInList && newItemName.trim() !== '' && newItemQuantity > 0) {
				notyf.success('The item was added to the list');
				return {
					...state,
					inventory: [
						...state.inventory,
						{
							name: newItemName,
							fullQuantity: newItemQuantity,
							missing: 0,
							userItem: true,
						},
					],
				};
			} else {
				notyf.error(
					`An item named ` +
						'<b>' +
						newItemName +
						'</b>' +
						`  already exist in the inventory`
				);

				return state;
			}

		case 'REMOVE_ITEM':
			const removedItemName = action.payload.itemName;
			const answer = window.confirm(
				`Are you sure you want to remove ${removedItemName} from the list?`
			);
			if (answer) {
				const updatedList = state.inventory.filter(
					(item) => item.name !== removedItemName
				);
				notyf.error(
					`The item named ` +
						'<b>' +
						removedItemName +
						'</b>' +
						`  has been removed`
				);
				return { ...state, inventory: updatedList };
			} else {
				notyf.error('Removing was canceled');
				return state;
			}
		default:
			return state;
	}
};

export default inventoryReducer;
