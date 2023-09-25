import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <div className="sm:max-w-screen-[312px] md: max-w-screen-2xl md:mx-auto mt-12 mb-10">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
