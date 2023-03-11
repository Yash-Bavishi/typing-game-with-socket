const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		credentials: true
	}
})


const home = require('./routes/home')
const game = require('./routes/game')
const data = require('./routes/data')
const cors = require('cors')

console.log(data.randomizer())

app.use(cors())

app.use('/', home)
app.use('/', game)
app.use('/', data.router)

/* REFERENCE
io.of('/chat').on('connection', (socket) => {
	socket.emit('chat', 'Hello there')
	socket.on('test', (msg) => {
		socket.broadcast.emit('reply', msg)
	})
})
*/


let gamer = data.randomizer()

function gamerer() {

	gamer = data.randomizer()
	return gamer
}

io.of('/game').on('connection', (socket) => {
	socket.on('change', (msg) => {
		socket.broadcast.emit('setGamer', gamerer())
	})
	socket.broadcast.emit('setGamer', gamer)
})

io.of('/chat').on('connection', (socket) => {
	socket.on('text', (msg) => {
		console.log(msg)
		socket.broadcast.emit('recv', msg)
	})
})

server.listen(5000, () => {
	console.log('Hello')
})


