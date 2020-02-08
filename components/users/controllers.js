const store = require('./store')

const addUser = (name) => {
	if (!name) {
		return Promise.reject("Invalid Data")
	} else {
		const newUser = {
			name
		}

		return store.add(newUser)
	}
}

const getUsers = (name) => {
	return store.list(name)
}

module.exports = {
	addUser,
	getUsers
}