const express = require('express')
const app = express()
const router = express.Router();


router.get('/game', (req, res) => {
	console.log('ossn')
	res.redirect('http://localhost:3000/game')
})


const ioServer = (io) => {
	io.on('connection', () => {
		console.log('Sayonara')
	})
}

module.exports = ioServer
