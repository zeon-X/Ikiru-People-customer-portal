import React from "react";

const PriorityBtnGenarator = ({ priority }) => {
  return (
    <button
      style={
        priority === 4
          ? {
              backgroundColor: "#e9faf7",
              color: "#20c9ac",
              fontWeight: 700,
              fontSize: 12,
              padding: "3px 8px",
            }
          : priority === 3
          ? {
              backgroundColor: "#eeedff",
              color: "#5542f6",
              fontWeight: 700,
              fontSize: 12,
              padding: "3px 8px",
            }
          : priority === 2
          ? {
              backgroundColor: "#f6ede4",
              color: "#ffa043",
              fontWeight: 700,
              fontSize: 12,
              padding: "3px 8px",
            }
          : priority === 1
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
      className="rounded px-2"
    >
      {priority === 4
        ? "P4"
        : priority === 3
        ? "P3"
        : priority === 2
        ? "P2"
        : priority === 1
        ? "P1"
        : "Not Set"}
    </button>
  );
};

export default PriorityBtnGenarator;
