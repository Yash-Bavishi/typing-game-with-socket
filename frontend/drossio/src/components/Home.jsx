
function Home() {


	function onClicked() {
		console.log('Hello');
	}

	function onSubmitted(e) {
		e.preventDefault();
		let form = e.target
		let formData = new FormData(form)
		let data = Object.fromEntries(formData.entries());
		console.log(data.name)
	}

	return(
	<div className="home">
		<h1>Enter a name to join the game</h1>
			<div>
				<form method="post" onSubmit={onSubmitted}>
				<input type="text" name="name" placeholder="Enter your cool gaming name"/>
				<button type="submit">Go to the game</button>
				</form>
			</div>
	</div>
	) 

	
}

export default Home;
