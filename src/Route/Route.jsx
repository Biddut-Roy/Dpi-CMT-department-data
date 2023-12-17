import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LAyout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login and Register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/signup",
          element:<Register />,
        },
      ],
    },
  ]);