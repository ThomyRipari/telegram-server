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

const getMessages = (user_filter) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(user_filter))
	})
}

const updateMessage = (id, text) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !text) {
			reject("Invalid Data")
			return
		} else {
			const message = await store.update(id, text)
			resolve(message)
			return
		}		
	})
}

const deleteMessage = (id) => {
	return new Promise((resolve, reject) => {
		if(!id) {
			reject("Not Provided a ID")
			return
		} else {
			store.delete(id)

			.then((message) => {
				resolve(message)
			})

			.catch((err) => {
				reject(err)
			})
		}
	})
}

module.exports = {
	newMessage,
	getMessages,
	updateMessage,
	deleteMessage
}