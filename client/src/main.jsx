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
import Comments from './components/Comments'
import Tasks from './components/Tasks'

const router = createBrowserRouter([
  {
    path: "/",
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
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
