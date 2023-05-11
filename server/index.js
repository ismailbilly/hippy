require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');
// const { log } = require('console');
app.use(cors())
const port = process.env.PORT
const io = new Server(server,{
  cors:{
    origin: "http://localhost:5173"
  },
}
  )
//👇🏻 Generates a random string
const fetchID = () => Math.random().toString(36).substring(2, 10);

//👇🏻 Nested object
let tasks = {
    pending: {
        title: "pending",
        items: [
            {
                id: fetchID(),
                title: "Send the Figma file to Dima",
                comments: [],
            },
        ],
    },
    ongoing: {
        title: "ongoing",
        items: [
            {
                id: fetchID(),
                title: "Review GitHub issues",
                comments: [
                    {
                        name: "David",
                        text: "Ensure you review before merging",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
    completed: {
        title: "completed",
        items: [
            {
                id: fetchID(),
                title: "Create technical contents",
                comments: [
                    {
                        name: "Dima",
                        text: "Make sure you check the requirements",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
};

app.get('/api', function (req, res) {
    res.json(tasks)
  })
//socket io connection
io.on('connection', (socket) => {
 console.log(`${socket.id} a user connected`);
//Create new task
socket.on('createTask', (data)=>{
    const newTask = {
        id:fetchID(),
        title:data,
        comments:[]
    }
tasks["pending"].items.push(newTask)
io.sockets.emit("tasks", tasks);
})
//When dragging item
 socket.on('taskDragged', (data)=>{
    const { source, destination } = data;
    //👇🏻 Gets the item that was dragged
    const itemMoved = {
        ...tasks[source.droppableId].items[source.index],
    };
    console.log("DraggedItem>>> ", itemMoved);
     //👇🏻 Removes the item from the its source
     tasks[source.droppableId].items.splice(source.index, 1);
      //👇🏻 Add the item to its destination using its destination index
      tasks[destination.droppableId].items.splice(destination.index, 0, itemMoved);
      //👇🏻 Sends the updated tasks object to the React app
    io.sockets.emit("tasks", tasks);
 })

 socket.on('disconect', ()=>{
    socket.disconnect()
    console.log(`${socket.id} a user disconnected`);
 })
});
//Database Connection
// mongoose.connect(process.env.MONGO_URI)
//Server 
server.listen(port, (req,res)=>console.log(`I am running on port ${port}`))
console.log('hi there')