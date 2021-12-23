import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SignatureCanvas from './SignatureCanvas';
import { updateUser } from '../../state/actions/userActions';

const UpdateUserButton = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer.user);

	const [name, setName] = useState(user.name);
	const [workplace, setWorkplace] = useState(user.workplace);
	const [date, setDate] = useState(user.date);
	const [signature, setSignature] = useState(user.signature);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChange = ({ target }) => {
		switch (target.name) {
			case 'name':
				setName(target.value);
				break;

			case 'workplace':
				setWorkplace(target.value);
				break;

			case 'date':
				setDate(target.value);
				break;

			default:
				break;
		}
	};

	const handleUpdateUser = () => {
		dispatch(
			updateUser({
				name: name,
				workplace: workplace,
				date: date,
				signature: signature,
			})
		);
		setName('');
		setWorkplace('');
		setDate();
		handleClose();
	};

	return (
		<>
			<Button variant="success" className="m-2" onClick={handleShow}>
				🆕 Update User Info
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update User Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="full-name">
							<Form.Label>Full Name:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter full name"
								name="name"
								onChange={handleChange}
								defaultValue={user.name}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="workplace">
							<Form.Label>Workplace:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter workplace"
								name="workplace"
								onChange={handleChange}
								defaultValue={user.workplace}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="date">
							<Form.Label>Date:</Form.Label>
							<Form.Control
								type="date"
								placeholder="Pick date"
								name="date"
								onChange={handleChange}
								defaultValue={user.date}
							/>
						</Form.Group>
						<Form.Group className="mb-3 text-center" controlId="date">
							<SignatureCanvas setSignature={setSignature} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="success" onClick={handleUpdateUser}>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default UpdateUserButton;
