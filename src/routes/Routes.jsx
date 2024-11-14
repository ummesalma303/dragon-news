import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CategoryNews from "../components/CategoryNews";

const router = createBrowserRouter([
    {
      path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '',
        element: <Navigate to='/category/08'></Navigate>
     },
      {
        path: '/category/:id',
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element:<CategoryNews></CategoryNews>
        }
      ]
    },
   {
    path:'/',
    element:<h2>News letter</h2>
   }
  ]);
  export default router