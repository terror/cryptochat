import React from 'react';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import Store from './Store';

const App = () => {
	return (
		<div className='App'>
			<Store>
				<Dashboard />
			</Store>
		</div>
	);
};

export default App;
