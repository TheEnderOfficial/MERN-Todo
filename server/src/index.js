const express = require("express");
const moduleToApp = require("./utils/moduleToApp");
const { connect: connectToDatabase } = require("./database");
require("dotenv").config();

async function main() {
	await connectToDatabase();
	const app = express();

	const HOST = process.env.HOST || "localhost";
	const PORT = process.env.PORT || 3000;
	app.use(express.json());

	// Add modules here
	moduleToApp(app, require("./modules/hello/hello.module"));

	app.listen(PORT, HOST, () => {
		console.log(`Server is running on http://${HOST}:${PORT}`);
	});
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
