import React from "react";
import { useNavigate } from "react-router-dom";

const HomePortals = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${props?.nav}`)}
      className="shadow rounded-xl p-5 w-[263px] h-[142px] bg-white cursor-pointer "
    >
      <div className="bg-primary rounded-full w-[43px] h-[43px] flex justify-center items-center">
        <img width={24} height={24} src={props?.icon} alt="icon" />
      </div>

      <p className="mt-4 font-bold">{props?.title}</p>
      <p className="text-sm">{props?.subtitle}</p>
    </div>
  );
};

export default HomePortals;
