import React from "react";

const StatusBtnGenarator = ({ status }) => {
  return (
    <div>
      {status?.toLowerCase() == "active" ? (
        <p className="bg-[#d0efd8] text-[12px] text-primary font-medium rounded-full px-3 py-1 text-center">
          {status}
        </p>
      ) : status?.toLowerCase() == "requested" ? (
        <p className="bg-[#fff6ed] text-[12px] text-[#ffa043] font-medium rounded-full px-3 py-1 text-center">
          {status}
        </p>
      ) : status?.toLowerCase() == "rejected" ? (
        <p className="bg-[#ffebe6] text-[12px] text-[red] font-medium rounded-full px-3 py-1 text-center">
          {status}
        </p>
      ) : (
        <p className="bg-[#0669fc] text-[12px] text-[white] font-medium rounded-full px-3 py-1 text-center">
          {status}
        </p>
      )}
    </div>
  );
};

export default StatusBtnGenarator;
