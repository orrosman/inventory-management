import React from 'react';
import List from './inventory/List';
import UserForm from './UserForm';

const App = () => {
	return (
		<div
			className=" text-center"
			style={{ maxHeight: 'calc(100vh - 14em)', overflowY: 'auto' }}
		>
			<List />
			<UserForm />
		</div>
	);
};
export default App;
