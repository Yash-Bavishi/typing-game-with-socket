import React from 'react';
import Home from './components/Home'
import Error from './components/Error'
import Game from './components/Game'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <Error />
		},
		{
			path: '/game',
			element: <Game />,
			errorElement: <Error />
		}
	])

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
