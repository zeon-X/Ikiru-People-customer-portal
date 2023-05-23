import React from "react";
import { EyeBtn } from "../Buttons";

const WebminarTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-sm">{x?.name}</td>
      <td className="text-sm">{x?.date}</td>
      <td>
        <EyeBtn></EyeBtn>
      </td>
    </tr>
  );
};

export default WebminarTableRow;
