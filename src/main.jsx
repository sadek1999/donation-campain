import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Root/Home/Home.jsx';
import Roots from './Components/Root/Root.jsx';
import Statistics from './Components/Root/Statistics/Statistics';
import Donation from './Components/donation/Donation.jsx';
import Details from './Components/Details/Details.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/statistics',
       
        element:<Statistics></Statistics>,
        loader:()=>fetch('https://raw.githubusercontent.com/sadek1999/job-hub-3/main/public/donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader:()=>fetch('https://raw.githubusercontent.com/sadek1999/job-hub-3/main/public/donation.json')
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=>fetch('https://raw.githubusercontent.com/sadek1999/job-hub-3/main/public/donation.json')
      }


    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
