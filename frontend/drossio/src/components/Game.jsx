import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Chat from './Chat'
import io from 'socket.io-client'

function Game(props) {

	//	 const socket = io('http://localhost:5000/game', {forceNew: false})

	const [text, setText] = useState(null)
	const [sockId, setSockId] = useState('')
	const [isSock, setIsSock] = useState(false)
	const [reSocket, setReSock] = useState(false)


	const socket = io('http://localhost:5000/game', { forceNew: false, autoConnect: false })

	useEffect(() => {
		socket.connect()
		socket.emit('ready', setIsSock(true))
		socket.on('setup', (msg) => {
			setText(msg)
			console.log(msg)
		})
		return () => {
			socket.disconnect()
		}
	}, [setText])


	const reload = () => {
		//		socket.emit('change', 'change game')
		setReSock(true)
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
			<Chat sock={{sock: socket}}/>
			<button onClick={reload}> Reload </button>

		</div>
	)
}

export default Game
