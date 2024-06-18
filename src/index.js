const express = require("express");
const app = express();

app.get("/", (req, res) => {
	const userComment = req.query.comment || "";
	res.send(`<html><body><h1>User comment:
 ${userComment}
</h1></body></html>\n`);
});

module.exports = app;
