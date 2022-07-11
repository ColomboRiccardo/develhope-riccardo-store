import React from 'react';
import Homepage from './pages/homepage/Homepage.page';
import CategoryPage from './pages/categoryPage/CategoryPage.pages';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Homepage />} />

				<Route path='/categories/:category' element={<CategoryPage />} />
			</Routes>
		</div>
	);
}

export default App;
