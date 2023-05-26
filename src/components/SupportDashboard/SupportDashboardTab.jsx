import React from "react";

const SupportDashboardTab = ({ props }) => {
  return (
    <div
      // onClick={() => navigate(`${props?.nav}`)}
      className="shadow rounded-xl p-5 min-w-[247px] h-[102px] w-full bg-white cursor-pointer select-none hover:shadow-xl transition-all ease-in-out"
    >
      <p className="text-[12px] text-info">{props?.name}</p>
      <p className="mt-2 font-bold text-[24px]">{props?.cases}</p>
    </div>
  );
};

export default SupportDashboardTab;
