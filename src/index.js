const express = require("express");
const app = express();

app.get("/", (req, res) => {
	const userComment = req.query.comment || "";
	res.send(`<html><body><h1>User comment:
 ${userComment}
</h1></body></html>\n`);
});

module.exports = app;

function isPositive(num) {
	if (num > 0) {
		return true;
	} else {
		return false;
	}
}

// 脆弱性のあるコード
function calculateTotal(price, quantity) {
	const tax = 0.1; // この変数は使用されていない
	return price * quantity;
}

// 脆弱性のあるコード
function processItems(items) {
	while (items.length > 0) {
		// items.length が変更されない場合、無限ループになる
	}
}
