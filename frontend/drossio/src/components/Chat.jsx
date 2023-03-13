import React from 'react'
import { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
function Chat({ sock }) {
	console.log("Name is ", sock.sock)
	const [isSockConnected, setIsSockConnected] = useState(false)

	//const socket = io('http://localhost:5000/chat')

	/* Reference 
	socket.on('chat', (msg) => {
		console.log('socket connection established boss')
		socket.emit('test', 'message from client boss')
	})

	socket.on('reply', (msg) => {
		console.log('called')
		console.log(msg)
	})
	

	socket.on('recv', (msg2) => {
		socket.connect()
		console.log('message received is ', msg2)
		setMsg([...msg, msg2])
	})
	*/
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
		//setMsg([...msg, text.current.value])
		/*	socket.emit('text', text.current.value) */
		console.log('message sent from here')
	}



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
