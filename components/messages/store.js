const Model = require('./model')

const newMessage = (message) => {
	const new_message = new Model(message)
	return new_message.save()
}

const getMessages = (chat_filter) => {
	return new Promise((resolve, reject) => {
		Model.find({chat: chat_filter}).populate('chat').exec((err, populated) => {
			if (err) {
				reject(err)
				return
			} else {
				resolve(populated)
			}
		})		
	})
}

const updateMessage = async (id, text) => {
	const updated_message = await Model.findById(id)
	updated_message.message = text

	const new_message = updated_message.save()
	return new_message

}

const deleteMessage = (id) => {
	const delete_message = Model.deleteOne({_id: id})

	return delete_message
}

module.exports = {
	add: newMessage,
	list: getMessages,
	update: updateMessage,
	delete: deleteMessage
}