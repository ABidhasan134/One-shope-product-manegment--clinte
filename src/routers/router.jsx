import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main"
import App from "../App";
import LogIn from "../log/logIn";
import Home from "../Home/home";
import Register from "../register/register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;