const mongoose = require('mongoose')

const Schema = mongoose.Schema

const users_schema = new Schema({
	name: String
})

const Model = mongoose.model("Users", users_schema)

module.exports = Model