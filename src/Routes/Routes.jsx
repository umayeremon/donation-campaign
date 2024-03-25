import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path:'/donation',
        element: <Donation/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/donation_details/:id',
        element:<DonationDetails/>
      }
    ]
  }

])

export default router;