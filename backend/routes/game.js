const express = require('express')
const app = express()
const router = express.Router();

router.get('/game', (req, res) => {
	res.send('<h1>Indevelopment</h1>')
})

module.exports = router
