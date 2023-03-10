const express = require('express')
const app = express()
const router = express.Router();

router.get('/game', (req, res) => {
	res.redirect('http://localhost:3000/game')
})

module.exports = router
