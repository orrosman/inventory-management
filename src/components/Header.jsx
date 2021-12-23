import React from 'react';
import exampleLogo from '../assets/plus.png';

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<i className="navbar-brand mx-auto text-center">
				<img
					src={exampleLogo}
					width="80"
					height="80"
					alt="example logo"
				></img>
				<div>Inventory Management</div>
			</i>
		</nav>
	);
};

export default Header;
