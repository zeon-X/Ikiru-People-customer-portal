import React, { useState } from "react";
import { downloadFile } from "../assets/iconsSvg";
import SupportDashboardTab from "../components/SupportDashboard/SupportDashboardTab";

const SupportDashboard = () => {
  const [dbTab, setDBTab] = useState([
    {
      name: "Open Cases",
      cases: 2,
      nav: "/support/cases",
    },
    {
      name: "Closed Cases",
      cases: 8,
      nav: "",
    },
  ]);
  return (
    <div className="p-[32px]  mx-auto max-w-[1190px] h-full">
      <div>
        <div className="mb-6 flex justify-between items-start">
          <p className="font-bold text-[24px] ">Dashboard</p>
          <button
            type=""
            className="btn btn-primary text-[14px] normal-case gap-2 w-[212px]"
          >
            {downloadFile}
            <p> Download ISL</p>
          </button>
        </div>

        <div className="mb-12 grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 justify-between items-start gap-5">
          {dbTab.map((x) => {
            return <SupportDashboardTab props={x} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
