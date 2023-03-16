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


console.log('whoami')

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
/*
io.of('/game').on('connection', (socket) => {
	console.log("YEH WALA", socket.id)
	socket.on('change', (msg) => {
		socket.broadcast.emit('setGamer', gamerer())
	})
	socket.broadcast.emit('setGamer', gamer)
})
*/
/*
io.of('/chat').on('connection', (socket) => {
	console.log("YEH DEKH", socket.id)
	socket.on('text', (msg) => {
		console.log(msg)
		socket.broadcast.emit('recv', msg)
	})
})
*/

// let sad = gamerer()

io.of('/game').on('connection', (socket) => {
	const sad = gamerer()
	console.log('socket-id', socket.id)
	socket.on('ready', () => {
		console.log('hola')
		//socket.emit('setup', gamerer())
		io.of('/game').emit('setup', sad)
		console.log("IDHAR ", sad)
	})
	socket.on('text', (msg) => {
		console.log('oskc', socket.id)
		socket.broadcast.emit('recv', msg)
		console.log(msg, sad)
		if (msg === sad) {
			console.log(socket.id, 'Wins the game')
			io.of('/game').to(socket.id).emit('chat', 'you won sir')
			console.log(msg)
		}
	})
})

server.listen(5000, () => {
	console.log('Hello')
})


