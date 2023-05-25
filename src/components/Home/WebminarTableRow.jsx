import React from "react";
import { EyeBtn } from "../Buttons";

const WebminarTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-[14px]">{x?.name}</td>
      <td className="text-[14px]">{x?.date}</td>
      <td>
        <EyeBtn></EyeBtn>
      </td>
    </tr>
  );
};

export default WebminarTableRow;
