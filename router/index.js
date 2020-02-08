const messages_sub_router = require('../components/messages/routes')
const users_sub_router = require('../components/users/routes')
const chats_sub_router = require('../components/chats/routes')

function router(server) {
	server.use("/messages", messages_sub_router)
	server.use("/users", users_sub_router)
	server.use("/chats", chats_sub_router)
}

module.exports = router