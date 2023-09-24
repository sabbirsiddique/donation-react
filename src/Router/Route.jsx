import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Statistic from "../Pages/Statistic/Statistic";
import Category from "../Pages/Category/Category";
import Donations from "../Pages/Donation/Donations";
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
            element: <Donations></Donations>,
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