const express = require("express")
const socket = require('./socket')
const bodyParser = require("body-parser")

const app = express()
const server = require('http').createServer(app)

const config = require('./config')
const connect_db = require("./db")
const router = require("./router/")

connect_db(config.DB_URL)

app.use(bodyParser.json())
app.use(config.PUBLIC_URL, express.static('public'))

socket.connect(server)

router(app);

server.listen(config.SERVER_PORT)