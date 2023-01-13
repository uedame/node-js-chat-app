// console.log("サーバ起動!!!");

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 4002;

app.get("/", (req, res) => {
	// res.send("index.html");
	res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
	console.log("ユーザーが接続しました");

	socket.on("chat message", (msg) => {
		// console.log("メッセージは" + msg);
		io.emit("chat message",msg)

	});
})

server.listen(PORT, () => {
	console.log("BBBBBBB");
})