import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Game(props) {

	const location = useLocation();
	const {state} = location 
	console.log(state)

	return (
		<div className="Game">
			<center><h1>Soon There will be a gme here</h1></center>
			<Link to={`/`}>Go back from here for now pwease</Link>
		</div>
	)
}

export default Game
