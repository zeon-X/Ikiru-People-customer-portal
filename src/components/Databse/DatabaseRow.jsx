import React from "react";

const DatabaseRow = ({ x }) => {
  return (
    <tr>
      <td className=" text-[14px] font-medium ">{x?.productName}</td>
      <td className=" text-[14px] font-medium">{x?.billableLicences}</td>
      <td className=" text-[14px] font-medium">{x?.activeLicences}</td>
      <td className="text-[14px] font-medium">{x?.nextBillingDate}</td>
    </tr>
  );
};

export default DatabaseRow;
