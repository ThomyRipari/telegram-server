const Model = require('./model')

const addUser = (user) => {
	const newUser = new Model(user)
	return newUser.save()
}

const getUsers = (name) => {
	let filter = {}

	if (name) {
		filter = {name}
	}

	return Model.find(filter)
}

module.exports = {
	add: addUser,
	list: getUsers
}