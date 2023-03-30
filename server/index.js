require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)

const port = process.env.PORT || 4000

app.get('/', function (req, res) {
    res.send('Hello World')
  })
//socket io connection
io.on('connection', (socket) => {
 console.log('a user connected');
});
//Database Connection
// mongoose.connect(process.env.MONGO_URI)
//Server 
server.listen(port, (req,res)=>console.log('I am running'))