import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Game(props) {

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



	const [arr, setArr] = useState([1])

	const adder = () => {
		setArr([...arr, arr[arr.length - 1] + 1])
	}

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

			{arr.map((items, i) => (<h1>{items}</h1>))}

			<button onClick={adder}>Click</button>

		</div>
	)
}

export default Game
