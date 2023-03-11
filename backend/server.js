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

/*
io.of('/game').on('connection', () => {
	console.log('Oye')
})
*/

io.of('/chat').on('connection', (socket) => {
	console.log('user connected')
	socket.on('chat', (msg) => {
		socket.emit('chat', (msg))
	})
})



/*io.of('/chat').on('connection', (socket) => {
	console.log('something')
	socket.on('chat', (msg) => {
		console.log("look", msg)
		socket.emit('chat', 'tester')
	})
})
*/
server.listen(5000, () => {
	console.log('Hello')
})


