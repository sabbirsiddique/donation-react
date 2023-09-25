import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto mt-12 mb-10">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
