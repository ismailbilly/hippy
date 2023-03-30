import AddTask from './AddTask'
import Nav from './Nav'
import TasksContainer from './TasksContainer'
import socketIO from "socket.io-client";
const Tasks = () => {
  return (
    <>
    <Nav/>
    <AddTask socket={socket}/>
    <TasksContainer socket={socket}/>
    </>
  )
}

export default Tasks