import React from "react";
import { PrimaryBtnFade } from "../Buttons";

const AccpetedAccountTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-gray-600 font-semibold ">{x?.name}</td>
      <td className="text-center">
        <p className="bg-gray-100 text-gray-500 font-bold rounded-full px-2 py-1.5 w-20 text-xs ">
          {x?.status}
        </p>
      </td>
      <td className="flex justify-end ">
        {x?.isSelected === 1 ? (
          <div className="flex justify-center items-center gap-2">
            <PrimaryBtnFade
              btnText={"Selcted"}
              style={{
                backgroundColor: "#0669fc",
                color: "white",
                fontWeight: 600,
                fontSize: 16,
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            />
            <PrimaryBtnFade
              btnText={"Delete Account"}
              style={{
                backgroundColor: "#ffebe6",
                color: "red",
                fontWeight: 600,
                fontSize: 16,
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            />
          </div>
        ) : (
          <button className="border px-[10px] py-[4px] rounded-[4px]">
            Select
          </button>
        )}
      </td>
    </tr>
  );
};

export default AccpetedAccountTableRow;
