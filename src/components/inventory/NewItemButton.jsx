import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../state/actions/inventoryActions';

const NewItemButton = () => {
	const [show, setShow] = useState(false);
	const [itemName, setItemName] = useState('');
	const [quantity, setQuantity] = useState();

	const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChange = ({ target }) => {
		switch (target.name) {
			case 'item-name':
				setItemName(target.value);
				break;
			case 'quantity':
				setQuantity(target.value);
				break;

			default:
				break;
		}
	};

	const handleAddItem = () => {
		dispatch(addNewItem({ name: itemName, fullQuantity: quantity }));
		setItemName('');
		setQuantity();
		handleClose();
	};

	return (
		<>
			<Button variant="success" className="m-2" onClick={handleShow}>
				➕ Add New Item
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="item-name">
							<Form.Label>Item Name:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter item name"
								name="item-name"
								onChange={handleChange}
								defaultValue={itemName}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="quantity">
							<Form.Label>Item Quantity</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter quantity"
								name="quantity"
								onChange={handleChange}
								defaultValue={quantity}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="success" onClick={handleAddItem}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default NewItemButton;
