import React from "react";
import { PrimaryBtn } from "../Buttons";

const RequestTraining = ({ x }) => {
  return (
    <tr>
      <td className="text-sm">
        {" "}
        <p>{x?.name}</p> <p>{x?.reqDate}</p>{" "}
      </td>
      <td className="text-sm">
        {x?.acc !== null ? (
          <>
            <p>{x?.acc.date}</p> <p>{x?.acc.time}</p>{" "}
          </>
        ) : (
          "Not specified Yet"
        )}
      </td>
      <td>
        <PrimaryBtn
          btnText="Join"
          style={{
            height: "28px",
            width: "60px",
          }}
          disabled={x?.join === 1 ? 0 : 1}
        />
      </td>
    </tr>
  );
};

export default RequestTraining;
