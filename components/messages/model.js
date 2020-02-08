const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messages_schema = new Schema({
	chat: {
		type: Schema.ObjectId,
		ref: 'Chats'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'Users'
	},
	message: {
		type: String,
		required: true
	},

	date: Date,
	file: String
})

const Model = mongoose.model("Messages", messages_schema)

module.exports = Model