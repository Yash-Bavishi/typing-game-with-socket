const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>Temporarily unavailable');
})

module.exports = router 
