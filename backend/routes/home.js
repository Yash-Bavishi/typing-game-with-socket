const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
	res.redirect('http://localhost:3000/');
})

module.exports = router 
