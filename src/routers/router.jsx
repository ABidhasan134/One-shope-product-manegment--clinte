import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main"
import App from "../App";
import LogIn from "../log/logIn";
import Home from "../Home/home";
import Register from "../register/register";
import ProductList from "../productList/productList";
import PriveteRouter from "./priveteRouter";
import Error from "../error/error";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
        },
        {
          path: '/productList',
          element: <PriveteRouter><ProductList></ProductList></PriveteRouter>,
          
        }
      ]
    },
  ]);

  export default router;