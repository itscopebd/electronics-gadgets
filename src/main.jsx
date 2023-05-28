import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Layout/Main.jsx'
import Shop from './Components/Shop/Shop'
import Error from './Components/Error/Error'
import Cart from './Components/Card/Cart'
import { getCartData } from './utils/fake'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/shop",
        element:<Shop></Shop>,
        loader:()=>fetch("products.json")
      },
      {
        path:"/cart",
        element:<Cart></Cart>,
        loader:getCartData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
