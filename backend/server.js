const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const home = require('./routes/home')
const game = require('./routes/game')
const data = require('./routes/data')
const cors = require('cors')

app.use(cors())
app.use('/', home)
app.use('/', game)
app.use('/', data)

server.listen(5000, () => {
	console.log('Hello')
})
