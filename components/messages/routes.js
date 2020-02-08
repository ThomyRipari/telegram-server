const express = require("express")
const multer = require("multer")
const response = require("../../response/")
const controllers = require("./controllers")

let upload = multer({dest: 'public/files/'})

let messages_sub_router = express.Router()

messages_sub_router.post("/", upload.single('file'), (req, res) => {
	const { chat, user, message } = req.body

	controllers.newMessage(chat, user, message, req.file)

	.then((new_message) => {
		response.success(req, res, 201, new_message)
	})

	.catch((err) => {
		response.error(req, res, 400, err)
	})
})

messages_sub_router.get("/:chatId", (req, res) => {
	const chat_filter = req.params.chatId

	controllers.getMessages(chat_filter)

	.then((messages) => {
		response.success(req, res, 200, messages)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
	})
})

messages_sub_router.patch("/:id", (req, res) => {
	controllers.updateMessage(req.params.id, req.body.text)

	.then((message) => {
		response.success(req, res, 200, message)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
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