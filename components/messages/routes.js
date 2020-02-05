const express = require("express")
const response = require("../../response/")
const controllers = require("./controllers")

const messages_sub_router = express.Router()

messages_sub_router.post("/", (req, res) => {
	const { user, message } = req.body

	controllers.newMessage(user, message)

	.then((new_message) => {
		response.success(req, res, 201, new_message)
	})

	.catch((err) => {
		response.error(req, res, 400, err)
	})
})

messages_sub_router.get("/", (req, res) => {
	controllers.getMessages()

	.then((messages) => {
		response.success(req, res, 200, messages)
	})

	.catch(() => {
		response.error(req, res, 500, "No se han podido obtener los mensajes")
	})
})

module.exports = messages_sub_router