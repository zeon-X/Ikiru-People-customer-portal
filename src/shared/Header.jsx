import React from "react";
import logo from "../assets/cs-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 shadow w-full bg-white header_basic">
      <div className="max-w-full mx-auto flex justify-between p-4 ">
        <div className="flex justify-center items-center gap-2">
          <label
            htmlFor="drawer-toggle"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
          <img width={150} height={52} src={logo} alt="" />
        </div>

        <ul className="menu menu-horizontal">
          <li tabIndex={0}>
            <a className="border rounded-lg">
              Manange Profile
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100 w-[175px]">
              <li>
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/manage-profile">Manage Profile</NavLink>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
