const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

const authController = require("./controllers/authController.js");
const postsController = require("./controllers/postsController.js");

const app = express();
app.use(bodyParser.json());
app.use(
	session({
		secret: "wouldireallyputmysecrethere",
		resave: false,
		saveUninitialized: true
	})
);

massive(process.env.CONNECTION_STRING).then(database => {
	app.set("db", database);
});

app.post("/api/auth/login", authController.login);
app.post("/api/auth/register", authController.register);
app.post("/api.logout", authController.logout);

app.get("/api/posts", postsController.getPosts);

app.post("/api/posts", postsController.createPost);

const PORT = process.env.SERVER_PORT || 25565;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT} 🌳`);
});
