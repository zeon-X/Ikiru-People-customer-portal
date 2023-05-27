import React, { useState } from "react";
import {
  arrowDown,
  arrowUp,
  attachmentSvg,
  clientSupportSvg,
} from "../../assets/iconsSvg";

const ChatMessageRecieved = ({ x }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4  mb-8">
      <div className="bg-primary rounded-full w-[46px] h-[46px] flex justify-center items-center">
        {clientSupportSvg}
      </div>

      <div className="p-4 rounded-lg bg-white max-w-[576px] w-full">
        <p className="text-[12px] font-medium text-primary ">
          Update from {x?.updateFrom}
        </p>
        {/* CHAT SHORT */}
        <div className="flex justify-between items-start">
          <div>
            {/* TITLE */}
            <p className="lg:text-[16px] sm:text-[14px] font-semibold my-1">
              {x?.messageTitle}
            </p>

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

          <div className="flex flex-wrap justify-start items-start gap-2">
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

export default ChatMessageRecieved;
