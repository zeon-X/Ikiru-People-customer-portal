import React from "react";

const BillingRow = ({ x }) => {
  return (
    <tr>
      <td className=" text-[14px] font-medium ">{x?.productName}</td>
      <td className=" text-[14px] font-medium">{x?.billableLicences}</td>
      <td className=" text-[14px] font-medium">{x?.activeLicences}</td>
      <td className="text-[14px] font-medium">
        {"$"} {x?.price}
      </td>
      <td className=" text-[14px] font-medium">
        {"$"} {x?.discount}
      </td>
      <td className=" text-[14px] font-medium">{x?.billingFrequency}</td>
      <td className="text-[14px] font-medium">{x?.nextBillingDate}</td>
    </tr>
  );
};

export default BillingRow;
