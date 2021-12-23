import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../../state/actions/userActions';
import UpdateUserButton from './UpdateUserButton';

const UserForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer.user);

	const [name, setName] = useState('');
	const [workplace, setWorkplace] = useState('');
	const [date, setDate] = useState();

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

	const handleSubmit = () => {
		dispatch(addNewUser({ name: name, workplace: workplace, date: date }));
	};

	return user ? (
		<UpdateUserButton />
	) : (
		<Form>
			<Form.Group className="mb-3" controlId="full-name">
				<Form.Label>Full Name:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter full name"
					name="name"
					onChange={handleChange}
					defaultValue={name}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="workplace">
				<Form.Label>Workplace:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter workplace"
					name="workplace"
					onChange={handleChange}
					defaultValue={workplace}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="date">
				<Form.Label>Date:</Form.Label>
				<Form.Control
					type="date"
					placeholder="Pick date"
					name="date"
					onChange={handleChange}
					defaultValue={date}
				/>
			</Form.Group>

			<Button variant="primary" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
};
export default UserForm;
