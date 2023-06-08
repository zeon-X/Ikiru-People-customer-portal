import React from "react";
import { useNavigate } from "react-router-dom";

const HomePortals = ({ props }) => {
  const navigate = useNavigate();
  return (
    <label htmlFor={props.id} className="">
      <div
        onClick={() => navigate(`${props?.nav}`)}
        className="shadow rounded-xl p-5  w-full min-h-[142px] h-full bg-white cursor-pointer select-none hover:shadow-xl transition-all ease-in-out"
      >
        <div className="bg-primary rounded-full w-[43px] h-[43px] flex justify-center items-center">
          <img width={24} height={24} src={props?.icon} alt="icon" />
        </div>

        <p className="mt-4 font-bold text-[16px]">{props?.title}</p>
        <p className="text-[12px] text-info">{props?.subtitle}</p>
      </div>
    </label>
  );
};

export default HomePortals;
