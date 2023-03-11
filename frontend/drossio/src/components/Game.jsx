import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Chat from './Chat'
import io from 'socket.io-client'

//const socket = io("http://localhost:5000", {path: "/game"})


function Game(props) {

	//	io.connect('http://localhost:5000/')

	const socket = io.connect('http://localhost:5000/game')
	/*
		socket.on('connect', () => {
			console.log('Hello there')
		})
	*/
	const [text, setText] = useState(null)

	useEffect(() => {
		let fetchData = async () => {
			console.log('fetch data called')
			await fetch('http://localhost:5000/data').then(response => response.json())
				.then(data => setText(data))
				.catch(err => console.log(err))

		}
		fetchData()
	}, [])




	const location = useLocation();
	const { state } = location
	console.log(state)
	return (
		<div>
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

			<Chat />

		</div>
	)
}

export default Game
