import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../shared/Header";
import {
  arrowDown,
  arrowUp,
  billingSvg,
  homeSvg,
  selectedAccountSvg,
  supportSvg,
  userSvg,
  homeSvgWhite,
  billingSvgWhite,
  userSvgWhite,
  selectedAccountSvgWhite,
  supportSvgWhite,
} from "../assets/iconsSvg";

const Drawer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSupportSelected, setIsSupportSelected] = useState(false);

  useEffect(() => {
    setIsSupportSelected(location?.pathname?.includes("support"));
  }, [location]);

  return (
    <div className="relative">
      <Header></Header>
      <div className="drawer drawer-mobile  max-w-full mx-auto">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content w-full bg-base-200 pt-[82px]">
          <Outlet />
        </div>
        <div className="drawer-side  ">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[250px]  bg-white pt-[112px]">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start items-center gap-4 text-[14px] text-white bg-primary"
                    : "flex justify-start items-center gap-4 text-[14px]"
                }
              >
                {location?.pathname === "/" ? homeSvgWhite : homeSvg}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="billing"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start items-center gap-4 text-[14px] text-white bg-primary"
                    : "flex justify-start items-center gap-4 text-[14px]"
                }
              >
                {location?.pathname === "/billing"
                  ? billingSvgWhite
                  : billingSvg}
                Billing
              </NavLink>
            </li>

            <li>
              <label
                className="flex justify-between items-center gap-4 transition-all ease-in-out"
                onClick={() => setIsSupportOpen(!isSupportOpen)}
              >
                <div className="flex justify-start items-center gap-4 text-[14px] ">
                  <span className={isSupportSelected ? "text-primary" : ""}>
                    {isSupportSelected ? supportSvgWhite : supportSvg}
                  </span>
                  Support
                </div>
                {isSupportOpen ? arrowUp : arrowDown}
              </label>
            </li>

            <li
              className={
                isSupportOpen
                  ? "flex transition-all ease-in-out"
                  : "hidden transition-all ease-in-out"
              }
            >
              <div className="bg-white px-0">
                <ul className="menu w-full">
                  <li className="">
                    <NavLink to="support/dashboard">
                      <p className="ml-8  text-[14px]">Dashboard</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="support/cases">
                      <p className="ml-8 text-[14px]">Cases</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="support/create-cases">
                      <p className="ml-8 text-[14px]">Create Cases</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="support/databases">
                      <p className="ml-8 text-[14px]">Databases</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start items-center gap-4 text-[14px] text-white bg-primary"
                    : "flex justify-start items-center gap-4 text-[14px]"
                }
              >
                {location?.pathname === "/users" ? userSvgWhite : userSvg}
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="select-account"
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-start items-center gap-4 text-[14px] text-white bg-primary"
                    : "flex justify-start items-center gap-4 text-[14px]"
                }
              >
                {location?.pathname === "/select-account"
                  ? selectedAccountSvgWhite
                  : selectedAccountSvg}

                <p>Select Account</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
