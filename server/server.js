const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

// Set static folder
app.use(express.static(path.join(__dirname, "../client/build")));

const PORT = process.env.PORT || 3000 ;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
