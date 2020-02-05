const express = require("express")
const connect_db = require("./db")
const bodyParser = require("body-parser")
const router = require("./router/")

connect_db('mongodb://:@cluster0-shard-00-00-u9by7.mongodb.net:27017,cluster0-shard-00-01-u9by7.mongodb.net:27017,cluster0-shard-00-02-u9by7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')

const app = express()
app.use(bodyParser.json())
app.use('/app', express.static('public'))

router(app);

app.listen(3000)