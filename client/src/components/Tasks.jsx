import AddTask from './AddTask'
import Nav from './Nav'
import TasksContainer from './TasksContainer'
import socketIO from "socket.io-client";
const Tasks = () => {
  /*
👇🏻  Pass Socket.io into the required components
    where communications are made with the server
*/
const socket = socketIO.connect("http://localhost:5000");
  return (
    <>
    <Nav/>
    <AddTask socket={socket}/>
    <TasksContainer socket={socket}/>
    </>
  )
}

export default Tasks