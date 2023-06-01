import React from "react";
import logo from "../assets/cs-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { arrowDownBold, toggleBar } from "../assets/iconsSvg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 shadow w-full bg-white header_basic">
      <div className="max-w-full mx-auto flex justify-between p-4 ">
        <div className="flex justify-center items-center gap-2">
          <label
            htmlFor="drawer-toggle"
            className="btn drawer-button lg:hidden"
          >
            {toggleBar}
          </label>
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            width={150}
            height={52}
            src={logo}
            alt=""
          />
        </div>

        <div className=" text-[14px] ">
          <div className="dropdown dropdown-end">
            <a
              tabIndex={1}
              className="cursor-pointer border rounded-lg flex gap-2 p-4"
            >
              <p className="lg:block sm:hidden">Manange Profile</p>
              <p className="sm:block lg:hidden">Profile</p>
              {arrowDownBold}
            </a>
            <ul
              tabIndex={1}
              className="dropdown-content menu shadow  p-2 bg-base-100 w-[175px]"
            >
              <li>
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/users">Manage Profile</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy">Privace Policy</NavLink>
              </li>
              <li>
                <button className="btn btn-secondary">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
