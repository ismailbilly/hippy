import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, Route
} from "react-router-dom";
//local imports
import Login from './components/Login'
import Comments from './components/comments';
import Tasks from './components/Tasks'
//import Landings from './components/Landings'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/tasks",
    element: <Tasks/>,
  },
  {
    path: "/comments",
    element: <Comments/>,
  },
  {
    path: "/comments/:category/:id",
    element: <Comments/>,
  },
 
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
