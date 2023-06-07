import React from "react";
import { useNavigate } from "react-router-dom";

const SupportDashboardTab = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${props?.nav}`)}
      // min-w-[247px]
      className="shadow rounded-xl p-5  h-[112px] w-full bg-white cursor-pointer select-none hover:shadow-xl transition-all ease-in-out"
    >
      <p className="text-[12px] text-info">{props?.name}</p>
      <p className="mt-2 font-bold text-[24px]">{props?.cases}</p>
    </div>
  );
};

export default SupportDashboardTab;
