import React from 'react';
import List from './inventory/List';
import UserForm from './UserForm';
import NewItemButton from './inventory/NewItemButton';

const App = () => {
	return (
		<div
			className=" text-center"
			style={{ maxHeight: 'calc(100vh - 14em)', overflowY: 'auto' }}
		>
			<NewItemButton />
			<List />
			<UserForm />
		</div>
	);
};
export default App;
