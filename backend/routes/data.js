const express = require('express')
const app = express()
const router = express.Router()
const data = require('../database/words.json')


router.get('/data', (req, res) => {
	res.json(data)
})
module.exports = router
