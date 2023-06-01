import React, { useState } from "react";
import {
  arrowDown,
  arrowUp,
  attachmentSvg,
  personSvg,
} from "../../assets/iconsSvg";
import attactmentPictureSample from "../../assets/CaseUpdate/attactment.png";

const ChatMessageSent = ({ x }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="flex sm:flex-col gap-4  lg:flex-row-reverse lg:items-start sm:items-end mb-8">
      <div className="bg-warning rounded-full w-[46px] h-[46px] flex justify-center items-center">
        {personSvg}
      </div>

      <div className="p-4 rounded-lg bg-white max-w-[576px] w-full">
        {/* CHAT SHORT */}
        <div className="flex justify-between items-start gap-2">
          <div>
            {/* TITLE */}
            <p className="lg:text-[16px] sm:text-[14px] text-end font-semibold my-1">
              {x?.messageTitle}
            </p>

            <div className="flex lg:flex-row sm:flex-wrap lg:gap-4 sm:gap-0 font-[Manrope]">
              {/* ATTACTMENT */}
              <div
                className={
                  x?.files?.length == 0
                    ? "hidden"
                    : isExpand
                    ? "hidden"
                    : "flex gap-2"
                }
              >
                <span>{attachmentSvg}</span>
                <p className="text-[12px] text-info ">
                  {x?.files?.length + " attatchments"}
                </p>
              </div>

              {/*   DATE */}
              <p className="text-[12px] text-info ">
                {!isExpand ? "•" : ""} {x?.time}{" "}
              </p>
            </div>
          </div>

          {/* EXPAND BTN */}
          <button
            onClick={() => setIsExpand(!isExpand)}
            className="rounded-full lg:w-[40px] lg:h-[40px] sm:w-[20px] sm:h-[20px] bg-[#ebeaed] flex justify-center items-center "
          >
            {!isExpand ? arrowDown : arrowUp}
          </button>
        </div>
        {/* DETAILS */}
        <div className={!isExpand ? "hidden" : "mt-6 "}>
          <div className={x?.message?.length == 0 ? "hidden" : ""}>
            <p className="text-[14px] font-[Manrope] font-medium ">
              Description
            </p>
            <p className="text-[14px] font-[Manrope] text-info my-3">
              {x?.message}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {x?.files?.map((img) => {
              return (
                <img
                  className="max-w-[430px] max-h-[145px] rounded"
                  src={img}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageSent;
