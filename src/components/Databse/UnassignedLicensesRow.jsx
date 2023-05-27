import React from "react";

const UnassignedLicensesRow = ({ x }) => {
  return (
    <tr>
      <td className=" text-[14px] font-medium ">{x?.productName}</td>
      <td className=" text-[14px] font-medium">{x?.licences}</td>
    </tr>
  );
};

export default UnassignedLicensesRow;
