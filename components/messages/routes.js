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
	const user_filter = req.query.user || null

	controllers.getMessages(user_filter)

	.then((messages) => {
		response.success(req, res, 200, messages)
	})

	.catch(() => {
		response.error(req, res, 500, "No se han podido obtener los mensajes")
	})
})

messages_sub_router.patch("/:id", (req, res) => {
	controllers.updateMessage(req.params.id, req.body.text)

	.then((message) => {
		response.success(req, res, 200, message)
	})

	.catch(() => {
		response.error(req, res, 500, "No se ha podido actualizar el mensaje")
	})
})

messages_sub_router.delete("/:id", (req, res) => {
	controllers.deleteMessage(req.params.id)

	.then(_ => {
		response.success(req, res, 200, `Message ${req.params.id} deleted`)
	})

	.catch(err => {
		response.error(req, res, 500, err)
	})
})

module.exports = messages_sub_router