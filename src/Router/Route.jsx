import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/donation",
            element: <Donation></Donation>,
        },
        {
            path: "/statistic",
            element: <Statistic></Statistic>
        },
      ]
    },
  ]);

export default router;