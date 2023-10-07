import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Root/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import MyDonations from './components/Root/MyDonations.jsx';
import Statistics from './components/Root/Statistics.jsx';
import DonationDetails from './components/Root/DonationDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donations",
        element: <MyDonations></MyDonations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
