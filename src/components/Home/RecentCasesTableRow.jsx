import React from "react";
import { PrimaryBtnFade } from "../Buttons";

const RecentCasesTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-sm">
        {x?.name?.slice(0, 26)}
        <span>{x?.name?.length > 26 ? ".." : ""}</span>
      </td>
      <td className="text-sm">{x?.status}</td>
      <td className="text-sm">
        <PrimaryBtnFade
          btnText={
            x?.priority == 3
              ? "P3"
              : x?.priority == 2
              ? "P2"
              : x?.priority == 1
              ? "P1"
              : "Not Set"
          }
          style={
            x?.priority == 3
              ? {
                  backgroundColor: "#e9faf7",
                  color: "#458f4f",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "3px 8px",
                }
              : x?.priority == 2
              ? {
                  backgroundColor: "#e9faf7",
                  color: "#458f4f",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "3px 8px",
                }
              : x?.priority == 1
              ? {
                  backgroundColor: "#ffebe6",
                  color: "red",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "3px 8px",
                }
              : {
                  backgroundColor: "#e9e9e9",
                  color: "grey",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "3px 8px",
                }
          }
        ></PrimaryBtnFade>
      </td>
    </tr>
  );
};

export default RecentCasesTableRow;
