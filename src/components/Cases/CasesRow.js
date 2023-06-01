import React, { useState } from "react";
import PriorityBtnGenarator from "../PriorityBtnGenarator";
import { arrowDown, arrowUp } from "../../assets/iconsSvg";
import { useNavigate } from "react-router-dom";

const CasesRow = ({ x, len, index }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 lg:min-w-[1026px] sm:min-w-[700px]">
      {/* ROW DATA */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="grid grid-cols-5 cursor-pointer justify-center items-center text-[14px]"
      >
        <p className="">{x?.caseName}</p>
        <p className="">{x?.reference}</p>
        <p className="">{x?.status}</p>
        <div className="">
          <PriorityBtnGenarator priority={x.priority} />
        </div>
        {/* Toggle Btn */}
        <div className="flex gap-10">
          <p>{x?.createdOn}</p>
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {!isOpen ? arrowDown : arrowUp}
          </button>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div
        className={
          isOpen
            ? "text-[14px] mt-6 max-w-[950px] text-info font-[Manrope] visible transition-all ease-in-out"
            : "hidden invisible transition-all ease-in-out"
        }
      >
        <p>{x.description}</p>
        <button
          onClick={() =>
            navigate(
              `/support/cases/${x?.caseName?.replace(/ /g, "-")}?id=${x?.id}`
            )
          }
          className="text-primary mt-4"
        >
          See Full Details
        </button>
      </div>
      <div className={len - 1 === index ? "" : "border-b mt-8"}></div>
    </div>
  );
};

export default CasesRow;
