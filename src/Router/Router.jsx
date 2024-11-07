import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Services from "../Pages/Services/Services";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllProviders from "../Pages/AllProviders/AllProviders/AllProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/providers",
        element: <AllProviders></AllProviders>,
      },
    ],
  },
]);

export default router;
