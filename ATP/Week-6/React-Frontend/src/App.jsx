import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologys from './components/Technologys'
import NodeJs from './components/NodeJs'
import Vite from './components/Vite'
import Java from './components/java'
import RootComponants from './components/rootComponants'
import { Navigate } from 'react-router'

function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootComponants/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"technologys",
          element:<Technologys/>,
          children:[
            {
              index:true,
              element:<Navigate to="java" replace/>

            },
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"nodejs",
              element:<NodeJs/>
            },
            {
              path:"vite",
              element:<Vite/>
            }
          ]
        }
      ]
    }
  ])
  return (
    
      <RouterProvider router={routerObj} />
      
  )
}

export default App
