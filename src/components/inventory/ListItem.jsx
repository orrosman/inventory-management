import { Form } from 'react-bootstrap';
import RemoveItemButton from './RemoveItemButton';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../state/actions/inventoryActions';
import { useState } from 'react';

const ListItem = (props) => {
	const { item, index } = props;
	const [currentQuantity, setCurrentQuantity] = useState(0);

	const handleChange = (updatedQuantity) => {
		dispatch(updateQuantity(item, updatedQuantity));
		setCurrentQuantity(updatedQuantity);
	};

	const dispatch = useDispatch();
	return (
		<tr key={item.name}>
			<td>{index + 1}</td>
			<td>{item.name}</td>
			<td>{item.fullQuantity}</td>
			<td>
				<Form.Control
					type="number"
					placeholder="Enter current quantity"
					defaultValue={currentQuantity}
					min={0}
					onChange={({ target }) => handleChange(target.value)}
				/>
			</td>
			<td>
				{item.fullQuantity - currentQuantity < 0
					? 0
					: item.fullQuantity - currentQuantity}
			</td>
			<td>{item.userItem ? <RemoveItemButton name={item.name} /> : null}</td>
		</tr>
	);
};
export default ListItem;
