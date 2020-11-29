import {Requests} from "./client/src/commons/enums/Requests";
import {Responses} from "./client/src/commons/enums/Responses";


const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "/client/build")));


io.on("connection", (socket) => {

    socket.on(Requests.login, ({email: email, password: password}) => {
        console.log("test");
        let response = false;
        io.emit(Responses.login, {email:email, response:response})
    })
})


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));