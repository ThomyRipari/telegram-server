const config = {
	DB_URL: process.env.DB_URL || 'mongodb://:@cluster0-shard-00-00-u9by7.mongodb.net:27017,cluster0-shard-00-01-u9by7.mongodb.net:27017,cluster0-shard-00-02-u9by7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
	SERVER_PORT: process.env.SERVER_PORT || 3000,
	PUBLIC_URL: process.env.PUBLIC_URL || '/app'
}

module.exports = config