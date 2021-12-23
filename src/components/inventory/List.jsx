import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import ListItem from '../ListItem';
const List = () => {
	const inventory = useSelector((state) => state.inventory);

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Item's Name</th>
					<th>Full Quantity</th>
					<th>Current Quantity</th>
					<th>Missing</th>
					<th>Remove Item</th>
				</tr>
			</thead>
			<tbody>
				{inventory.map((item, index) => (
					<ListItem key={item.name} item={item} index={index} />
				))}
			</tbody>
		</Table>
	);
};
export default List;
