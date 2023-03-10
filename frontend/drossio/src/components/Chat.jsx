import React from 'react'
import { useState } from 'react'


function Chat() {
	const [arr, setArr] = useState([1])

	const adder = () => {
		setArr([...arr, arr[arr.length - 1] + 1])
	}
	return (
		<div>

			{arr.map((items, i) => (<h1>{items}</h1>))}

			<button onClick={adder}>Click</button>
		</div>
	)
}

export default Chat
