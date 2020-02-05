exports.success = (req, res, status, message) => {
	return res.status(status).send({
		error: '',
		message: message
	})
}

exports.error = (req, res, status, err) => {
	return res.status(status).send({
		error: err,
		message: ''
	})
}