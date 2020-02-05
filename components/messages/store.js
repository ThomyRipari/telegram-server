const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise

const uri = 'mongodb://THOMY_R:Iranthala123@cluster0-shard-00-00-u9by7.mongodb.net:27017,cluster0-shard-00-01-u9by7.mongodb.net:27017,cluster0-shard-00-02-u9by7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => console.log("[Messages DB] conected successfully"))
.catch(() => console.error("[Messages DB] no se ha podido conectar"))

const newMessage = (message) => {
	const new_message = new Model(message)
	new_message.save()
}

const getMessages = async (user_filter) => {
	let filter = {}

	if (user_filter) {
		filter = {user: user_filter}
	}

	const messages_list = await Model.find(filter)
	return messages_list
}

const updateMessage = async (id, text) => {
	const updated_message = await Model.findById(id)

	updated_message.message = text

	const new_message = await updated_message.save()
	return new_message
}

const deleteMessage = async (id) => {
	const delete_message = await Model.deleteOne({
		_id: id
	})

	return delete_message
}

module.exports = {
	add: newMessage,
	list: getMessages,
	update: updateMessage,
	delete: deleteMessage
}