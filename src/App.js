import React, { Component } from 'react';
import './App.css';
// Layouts
import MainLayout from 'layouts/main/MainLayout';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainLayout />
			</Provider>
		);
	}
}

export default App;
