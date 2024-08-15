import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main"
import App from "../App";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <></>
        }
      ]
    },
  ]);

  export default router;