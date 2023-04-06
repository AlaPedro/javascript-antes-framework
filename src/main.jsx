import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home'
import NullishCO from './Pages/NullishCO'
import Objetos from './Pages/Objetos'
import RestOperator from './Pages/RestOperator'
import OptionalChaining from './Pages/OptionalChaining'
import Map from './Pages/Map'
import Filter from './Pages/FIlter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/nullishoperator",
    element: <NullishCO />
  },
  {
    path: "/objetos",
    element: <Objetos />
  },
  {
    path: "/restoperator",
    element: <RestOperator />
  },
  {
    path: "/OptionalChaining",
    element: <OptionalChaining />
  },
  {
    path: "/Map",
    element: <Map />
  },
  {
    path: "/Filter",
    element: <Filter />
  },
  {
    errorElement: <Error />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
