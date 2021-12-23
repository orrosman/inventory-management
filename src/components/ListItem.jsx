import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../state/actions/inventoryActions';

const ListItem = (props) => {
	const { item, index } = props;

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
					defaultValue={0}
					min={0}
					onChange={({ target }) =>
						dispatch(updateQuantity(item, target.value))
					}
				/>
			</td>
			<td>{item.missing}</td>
		</tr>
	);
};
export default ListItem;
