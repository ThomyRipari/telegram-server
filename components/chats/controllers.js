const store = require('./store')

const createChat = (users) => {
	if (!users || !Array.isArray(users)) {
		return Promise.reject("Invalid Data")
	}

	return store.create({users})
}

const getChats = (userId) => {
	return store.list(userId)
}


module.exports = {
	createChat,
	getChats
}