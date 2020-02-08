const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chats_schema = new Schema({
	users: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Users'
		}
	]
})

const Model = mongoose.model("Chats", chats_schema)

module.exports = Model