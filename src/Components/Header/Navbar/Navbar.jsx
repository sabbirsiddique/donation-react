import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <div className="">
          <a className=""><img src="https://i.ibb.co/y0cvsHX/Logo.png"/></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-12">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 text-lg underline font-bold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 text-lg underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistic"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 text-lg underline font-bold" : ""
              }
            >
              Statistic
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
