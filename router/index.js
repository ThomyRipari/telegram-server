const messages_sub_router = require('../components/messages/routes')

function router(server) {
	server.use("/messages", messages_sub_router)
}

module.exports = router