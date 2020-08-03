const express = require("express");
const cors = require("cors");

const homeRouter = require("./api/home/home.router.js");

const server = express();

server.use(express.json());

server.use('/api', homeRouter);

server.get('/', (req, res) => {
	res.status(200).json({
		message: 'The API is running!'
	});
});

module.exports = server;