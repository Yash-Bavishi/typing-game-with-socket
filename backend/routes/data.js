const express = require('express')
const app = express()
const router = express.Router()
const data = require('../database/words.json')


router.get('/data', (req, res) => {
	res.json(data)
})


function randomizer() {
	const number = data.words[Math.floor(Math.random() * data.words.length)]
	return number
}

console.log(data.words[Math.floor(Math.random() * data.words.length)], "OILL")

module.exports = { router, randomizer }
