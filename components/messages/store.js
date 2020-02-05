const DB = []

const newMessage = (message) => {
	DB.push(message)
}

const getMessages = () => {
	return DB;
}

module.exports = {
	add: newMessage,
	list: getMessages
}