import React from "react";

const RequestedAccountTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-info text-[16px] font-medium ">{x?.referance}</td>
      <td className="text-center">
        {x?.status?.toLowerCase() == "requested" ? (
          <p className="bg-[#fff6ed] text-[14px] text-[#ffa043] font-medium rounded-full px-2 py-1.5 w-24  ">
            {x?.status}
          </p>
        ) : x?.status?.toLowerCase() == "rejected" ? (
          <p className="bg-[#ffebe6] text-[14px] text-[red] font-medium rounded-full px-2 py-1.5 w-24  ">
            {x?.status}
          </p>
        ) : (
          <p className="bg-[#0669fc] text-[14px] text-[white] font-medium rounded-full px-2 py-1.5 w-24  ">
            {x?.status}
          </p>
        )}
      </td>
      <td className="w-[500px]"></td>
    </tr>
  );
};

export default RequestedAccountTableRow;
