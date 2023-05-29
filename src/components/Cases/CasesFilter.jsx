import React, { useState } from "react";

const CasesFilter = () => {
  const [isSpecificUser, setIsSpecificUser] = useState(false);
  const [specificUser, setSpecificUser] = useState([
    {
      name: "Andrew Smith",
    },
    {
      name: "David Smith",
    },
    {
      name: "Gabrial Smith",
    },
  ]);
  const handleSpecificUser = (value) => setIsSpecificUser(value);

  //   console.log(isSpecificUser);
  return (
    <div
      tabIndex={0}
      className="dropdown-content min-w-[250px]  max-w-[400px] w-full  p-6 shadow-2xl bg-base-100 rounded-xl "
    >
      <p className="text-[16px] font-semibold mb-4">Filters</p>
      {/* CASE PRIORITY */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="text-[14px] font-medium text-info">
            Case Priority
          </span>
        </label>
        <select className="select select-bordered text-[14px] font-medium font-[Manrope]">
          <option disabled selected>
            Select
          </option>
          <option>P1</option>
          <option>P2</option>
          <option>P3</option>
          <option>P4</option>
          <option>Not Set</option>
        </select>
        <label className="label">
          <span className="label-text-alt"></span>
        </label>
      </div>
      {/* CASE State */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="text-[14px] font-medium text-info">Case State</span>
        </label>
        <select className="select select-bordered text-[14px] font-medium font-[Manrope]">
          <option disabled selected>
            Select
          </option>
          <option>Active</option>
          <option>Resolved</option>
        </select>
        <label className="label">
          <span className="label-text-alt"></span>
        </label>
      </div>
      {/* CASE Ownership */}
      <div
        onChange={(e) => {
          if (e.target.value == "Specific Users") handleSpecificUser(true);
          else handleSpecificUser(false);
        }}
        className="form-control w-full max-w-xs"
      >
        <label className="label">
          <span className="text-[14px] font-medium text-info">
            Case Ownership
          </span>
        </label>
        <select className="select select-bordered text-[14px] font-medium font-[Manrope]">
          <option disabled selected>
            Select
          </option>
          <option>Specific Users</option>
          <option>User</option>
        </select>
        <label className="label">
          <span className="label-text-alt"></span>
        </label>
      </div>
      {/* Select Owner */}
      <div
        className={!isSpecificUser ? "hidden" : "form-control w-full max-w-xs"}
      >
        <label className="label">
          <span className="text-[14px] font-medium text-info">
            Select Owner
          </span>
        </label>
        <select className="select select-bordered text-[14px] font-medium font-[Manrope]">
          <option disabled selected>
            Select
          </option>
          {specificUser.map((x, index) => {
            return <option key={index}>{x?.name}</option>;
          })}
        </select>
        <label className="label">
          <span className="label-text-alt"></span>
        </label>
      </div>

      <button className="py-2.5 px-6 bg-primary rounded text-white text-[14px] mt-3">
        Update
      </button>
    </div>
  );
};

export default CasesFilter;
