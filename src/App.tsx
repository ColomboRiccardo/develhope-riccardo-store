import React from 'react';
import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import { ThemeProvider } from 'styled-components';

const theme = {
	main: 'red',
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<main className='App'>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/categories/:category' element={<CategoriesPage />} />
				</Routes>
			</main>
		</ThemeProvider>
	);
}

export default App;
