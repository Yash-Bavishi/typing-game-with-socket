import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Chat from './Chat'
import io from 'socket.io-client'

function Game(props) {

	const socket = io('http://localhost:5000/game')

	const [text, setText] = useState(null)

	/*
	useEffect(() => {
		let fetchData = async () => {
			console.log('fetch data called')
			await fetch('http://localhost:5000/data').then(response => response.json())
				.then(data => setText(data))
				.catch(err => console.log(err))

		}
		fetchData()
	}, [])
	*/

	socket.on('setGamer', (msg) => {
		console.log('Welcome gamer', msg)
		setText(msg)
	})

	const reload = () => {
		socket.emit('change', 'change game')
	}

	const location = useLocation();
	const { state } = location
	console.log(state)

	/*
			{text ?
				<div className="Game">
					<center><h1>{text.words[Math.floor(Math.random() * text.words.length)]}</h1></center>
					<Link to={`/`}>Go back from here for now pwease</Link>
				</div>
				:
				<div className="Game">
					<center><h1>Game must come here</h1></center>
					<Link to={`/`}>Go back from here for now pwease</Link>
				</div>}


	*/
	return (
		<div>

			{text ?
				<div className="Game">
					<center><h1>{text}</h1></center>
					<Link to={`/`}>Go back from here for now pwease</Link>
				</div>
				:
				<div className="Game">
					<center><h1>Game must come here</h1></center>
					<Link to={`/`}>Go back from here for now pwease</Link>
				</div>}
			<Chat />
			<button onClick={reload}> Reload </button>

		</div>
	)
}

export default Game
