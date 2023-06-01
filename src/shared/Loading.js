import React from "react";
import logo from "../assets/cs-logo2.png";

const Loading = () => {
  return (
    <div className="p-32">
      <div className="min-h-screen min-w-full w-full h-full flex justify-center items-center">
        <div>
          <img width={150} height={52} src={logo} alt="" />
          <div className="grid grid-cols-3 min-h-12">
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
