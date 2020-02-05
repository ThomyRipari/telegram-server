const db = require('mongoose')

db.Promise = global.Promise

const connect_db = (db_uri) => {
	db.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})

	.then(() => console.log("[Messages DB] conected successfully"))
	.catch(() => console.error("[Messages DB] no se ha podido conectar"))
}

module.exports = connect_db