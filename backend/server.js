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


app.use(cors())

app.use('/', home)
app.use('/', game)
app.use('/', data)

/* REFERENCE
io.of('/chat').on('connection', (socket) => {
	socket.emit('chat', 'Hello there')
	socket.on('test', (msg) => {
		socket.broadcast.emit('reply', msg)
	})
})
*/

io.of('/chat').on('connection', (socket) => {
	socket.on('text', (msg) => {
		console.log(msg)
		socket.broadcast.emit('recv', msg)
	})
})

server.listen(5000, () => {
	console.log('Hello')
})


