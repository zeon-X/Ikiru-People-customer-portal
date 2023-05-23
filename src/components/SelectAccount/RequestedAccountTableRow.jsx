import React from "react";

const RequestedAccountTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-gray-600 font-semibold ">{x?.referance}</td>
      <td className="text-center">
        {x?.status?.toLowerCase() == "requested" ? (
          <p className="bg-[#fff6ed] text-[#ffa043] font-bold rounded-full px-2 py-1.5 w-20 text-xs ">
            {x?.status}
          </p>
        ) : x?.status?.toLowerCase() == "rejected" ? (
          <p className="bg-[#ffebe6] text-[red] font-bold rounded-full px-2 py-1.5 w-20 text-xs ">
            {x?.status}
          </p>
        ) : (
          <p className="bg-[#0669fc] text-[white] font-bold rounded-full px-2 py-1.5 w-20 text-xs ">
            {x?.status}
          </p>
        )}
      </td>
      <td className="w-[500px]"></td>
    </tr>
  );
};

export default RequestedAccountTableRow;
