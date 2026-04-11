import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Home from './components/Home'
import CreateEmployee from './components/CreateEmployee'
import ListOfEmployee from './components/ListOfEmployee'
import Rootlayout from './components/Rootlayout'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'


function App() {
  const routObj=createBrowserRouter([
      {
        path:'/',
        element:<Rootlayout/>,
        children:[{
                    path:"",
                    element:<Home/>
                    }
                ]
      }
    ])
  return (
    
    <div>
      <RouterProvider router={routObj} />
    </div>
  )
}

export default App
