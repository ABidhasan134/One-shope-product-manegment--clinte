import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main"
import App from "../App";
import LogIn from "../log/logIn";
import Home from "../Home/home";
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
        }
      ]
    },
  ]);

  export default router;