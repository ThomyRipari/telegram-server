const express = require('express')
const response = require("../../response/")
const controllers = require("./controllers")

let users_sub_router = express.Router()

users_sub_router.post("/", (req, res) => {
	const { name } = req.body

	controllers.addUser(name)

	.then((user) => {
		response.success(req, res, 201, user)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
	})
})

users_sub_router.get("/", (req, res) => {
	controllers.getUsers(req.query.name || null)

	.then((users) => {
		response.success(req, res, 200, users)
	})

	.catch((err) => {
		response.error(req, res, 500, err)
	})
})

module.exports = users_sub_router