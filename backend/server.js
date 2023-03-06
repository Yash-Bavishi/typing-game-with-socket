const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const home = require('./routes/home')
const game = require('./routes/game')

app.use('/', home)
app.use('/', game)

server.listen(5000, () => {
	console.log('Hello')
})
