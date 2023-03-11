import React from 'react'
import { useState, useRef } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000/chat')

function Chat() {

	socket.on('connect', () => {
		console.log('Hello there')
	})

	const text = useRef(null)

	const [arr, setArr] = useState([1])

	const adder = () => {
		setArr([...arr, arr[arr.length - 1] + 1])
	}
	//{arr.map((items, i) => (<h1>{items}</h1>))}

	//<button onClick={adder}>Click</button>
	//

	const [msg, setMsg] = useState('')

	function sendMessage(e) {
		e.preventDefault()
		setMsg([...msg, text.current.value])
		socket.emit('chat', msg[msg.length - 1])
	}

	socket.on('chat', (msg2) => {
		console.log("dekh", msg2)
		setMsg([...msg, msg2])
		console.log('here', msg2)
		console.log('love')
	})


	return (
		<div className="chat">

			{msg ? <div><h1>{msg}</h1><br /></div> : <h1></h1>}

			<div className="form">
				<input ref={text} name="text" /> &nbsp &nbsp &nbsp
				<button onClick={sendMessage}>Send Message</button>
			</div>
		</div>
	)
}

export default Chat
