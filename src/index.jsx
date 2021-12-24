import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'notyf/notyf.min.css';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Provider store={store}>
			<App />
		</Provider>
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
