const store = require('./store')

const newMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			reject("Invalid Data")
			return
		} else {
			const new_message = {
				user,
				message,
				date: new Date()
			}

			store.add(new_message)

			resolve(new_message)
			return
		}
	})
}

const getMessages = () => {
	return new Promise((resolve, reject) => {
		resolve(store.list())
	})
}

module.exports = {
	newMessage,
	getMessages
}