const express = require("express")
const response = require("../../response/")
const controllers = require("./controllers")

chats_sub_router = express.Router()

chats_sub_router.post("/", (req, res) => {
	controllers.createChat(req.body.users)

	.then((chat) => {
		response.success(req, res, 201, chat)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
	})
})

chats_sub_router.get("/:userId", (req, res) => {
	controllers.getChats(req.params.userId)

	.then((chats) => {
		response.success(req, res, 200, chats)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
	})
})


module.exports = chats_sub_router
