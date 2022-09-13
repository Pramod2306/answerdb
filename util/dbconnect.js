const mongoose = require("mongoose");

const databaseConnection = () => {
	
	main().catch((err) => console.log(err));
	
	async function main() {
        
		try {
			const data = await mongoose.connect(process.env.DB_HOST, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log('host:',data.connection.host,
            'port:',data.connection.port,
            'name:',data.connection.name);
		} catch (err) {
			console.log("Database not connected");
			console.log(err);
		}
	}
};

module.exports = databaseConnection;