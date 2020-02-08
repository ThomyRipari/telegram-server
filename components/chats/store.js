const Model = require('./model')

const createChat = (users) => {
	const new_chat = new Model(users)
	return new_chat.save()	
}

const getChats = (userId) => {
	return new Promise((resolve, reject) => {
		Model.find({users: { $in: [userId]}}).populate('users').exec((err, populated) => {
			if (err) {
				reject(err)
				return
			}

			resolve(populated)
		})

	}) 
}

module.exports = {
	create: createChat,
	list: getChats
}