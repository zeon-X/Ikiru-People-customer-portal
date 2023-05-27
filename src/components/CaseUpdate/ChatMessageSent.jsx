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
    <div className="flex gap-4 flex-row-reverse mb-8">
      <div className="bg-warning rounded-full w-[46px] h-[46px] flex justify-center items-center">
        {personSvg}
      </div>

      <div className="p-4 rounded-lg bg-white max-w-[576px] w-full">
        {/* CHAT SHORT */}
        <div className="flex justify-between items-start">
          <div>
            {/* TITLE */}
            <p className="text-[16px] font-semibold my-1">{x?.messageTitle}</p>

            <div className="flex gap-4 font-[Manrope]">
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
                <p className="text-[12px] text-info ">{"attatchment.jpg"}</p>
              </div>

              {/*   DATE */}
              <p className="text-[12px] text-info ">• {x?.time} </p>
            </div>
          </div>

          {/* EXPAND BTN */}
          <button
            onClick={() => setIsExpand(!isExpand)}
            className="rounded-full w-[40px] h-[40px] bg-[#ebeaed] flex justify-center items-center "
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
                  className="max-w-[518px] max-h-[175px] rounded"
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
