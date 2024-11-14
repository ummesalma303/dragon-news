import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
   {
    path:'/news',
    element:<h2>News letter</h2>
   }
  ]);
  export default router