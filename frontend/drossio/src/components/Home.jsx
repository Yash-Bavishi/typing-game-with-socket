import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Home() {


	const navigate = useNavigate();

	function onClicked(e) {
		console.log('Hello');

		e.preventDefault();
		let form = e.target
		let formData = new FormData(form)

		let data = Object.fromEntries(formData.entries());
		navigate('/game', { state: data })
	}



	return (
		<div className="home" onSubmit={onClicked}>
			<h1>Enter a name to join the game</h1>
			<div>
				<form method="post">
					<input type="text" name="name" placeholder="Enter your cool gaming name" />
					<button type="submit">Go to the game</button>
				</form>
			</div>
		</div>
	)


}

export default Home;
