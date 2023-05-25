import React from "react";

const PrimaryBtn = ({ btnText, btnFunc, style, disabled }) => {
  return (
    <button
      style={{ ...style }}
      className={
        !disabled
          ? "bg-[#448e4d]  font-medium rounded-lg text-white"
          : "bg-gray-300 font-medium rounded-lg text-info"
      }
      onClick={() => btnFunc}
      disabled={disabled === 1 ? 1 : 0}
    >
      {btnText}
    </button>
  );
};

const PrimaryBtnFade = ({ btnText, btnFunc, style }) => {
  return (
    <button style={{ ...style }} className="rounded-lg" onClick={() => btnFunc}>
      {btnText}
    </button>
  );
};

const EyeBtn = ({ btnFunc, style }) => {
  return (
    <button style={{ ...style }} className="" onClick={() => btnFunc}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="grey"
        className="w-6 h-6"
      >
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export { PrimaryBtn, PrimaryBtnFade, EyeBtn };
