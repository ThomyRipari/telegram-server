const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messages_schema = new Schema({
	user: {
		type: String,
		required: true
	},

	message: {
		type: String,
		required: true
	},

	date: Date
})

const Model = mongoose.model("Messages", messages_schema)

module.exports = Model