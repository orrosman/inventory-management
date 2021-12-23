import React from 'react';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';

const Footer = () => {
	return (
		<footer
			className="
			fixed-bottom
			bottom-0
			bg-dark
			text-center text-white
			w-100
		"
		>
			<div className="container p-2 pb-0">
				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://www.linkedin.com/in/orrosman/"
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedinLogo} alt="Linkedin"></img>
				</a>
				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://github.com/orrosman"
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					<img src={githubLogo} alt="Linkedin"></img>
				</a>
			</div>

			<div className="text-center p-1">
				© 2021 Copyright:
				<span>
					{' '}
					<a className="text-white" href="https://github.com/orrosman">
						Or Rosman
					</a>
				</span>
			</div>
		</footer>
	);
};
export default Footer;
