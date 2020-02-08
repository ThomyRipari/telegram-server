const store = require('./store')

const newMessage = (chat, user, message, file) => {
	return new Promise((resolve, reject) => {
		if (!user || !message || !chat) {
			reject("Invalid Data")
			return
		} else {
			let file_url = ''
			console.log(file)

			if (file) {
				file_url = 'http://localhost:3000/app/public/files/' + file.filename
			}

			const new_message = {
				chat,
				user,
				message,
				date: new Date(),
				file: file_url
			}

			store.add(new_message)

			.then(_ => {
				resolve(new_message)
				return
			})

			.catch(_ => {
				reject("No se ha podido guardar el mensaje")
				return
			})

		}
	})
}

const getMessages = (chat_filter) => {
	return store.list(chat_filter)
}

const updateMessage = (id, text) => {
	return new Promise((resolve, reject) => {
		if (!id || !text) {
			reject("Invalid Data")
			return
		} else {
			store.update(id, text)

			.then((message) => {
				resolve(message)
			})

			.catch(_ => {
				reject("No se ha podido actualizar el mensaje")
			})

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