import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Form } from 'react-bootstrap';
import { updateQuantity } from '../../state/actions/inventoryActions';

const List = () => {
	const inventory = useSelector((state) => state.inventory);
	const dispatch = useDispatch();

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Item's Name</th>
					<th>Full Quantity</th>
					<th>Current Quantity</th>
					<th>Missing</th>
				</tr>
			</thead>
			<tbody>
				{inventory.map((item, index) => (
					<tr key={item.name}>
						<td>{index + 1}</td>
						<td>{item.name}</td>
						<td>{item.fullQuantity}</td>
						<td>
							<Form.Control
								type="number"
								placeholder="Enter current quantity"
								defaultValue={item.fullQuantity}
								min={0}
								onChange={({ target }) =>
									dispatch(updateQuantity(item, target.value))
								}
							/>
						</td>
						<td>{item.missing}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};
export default List;
