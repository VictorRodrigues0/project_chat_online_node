import express from "express";
import path from "path";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

var messages: object[] = [];
var users: string[] = [];

app.use(express.static(path.join(__dirname, "../public")));

io.on("connection", (socket: any) => {
    console.log("New client connected", socket.id);

    socket.emit("previusMessages", messages);

    const renderUsersOnline = () => {
        socket.emit("onlineUsers", users.length);
        socket.broadcast.emit("onlineUsersGlobal", users.length);
    }

    socket.on("sendUser", (user: any) => {
        socket.username = user;
        users.push(user);
        renderUsersOnline();
    });

    socket.on("disconnect", () => {
        users.pop();

        console.log("Client disconnected", socket.username);

        socket.broadcast.emit("receiveMessage", { username: socket.username, message: "saiu do chat" }, "warning");
        renderUsersOnline();
    });

    socket.on("sendMessage", (message: any) => {
        messages.push(message);
        socket.broadcast.emit("receiveMessage", message);
    });

    socket.on("sendMessageSpecial", (message: any, status: string) => {
        console.log(message, status);
        socket.broadcast.emit("receiveMessage", message, status);
    });

});

server.listen(process.env.PORT || 9011, () => {
    console.log(`Server is running on link: http://localhost:${process.env.PORT}`)
});
