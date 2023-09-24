import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
import Category from "../Pages/Category/Category";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('/public/data.json')
        },
        {
            path: "/donation",
            element: <Donation></Donation>,
        },
        {
            path: "/statistic",
            element: <Statistic></Statistic>
        },
        {
          path: "/categories/:id",
          element:<Category></Category>,
          loader: ()=>fetch('/data.json'),
        }
      ]
    },
  ]);

export default router;