import React from "react";
import RequestedAccountTableRow from "../components/SelectAccount/RequestedAccountTableRow";
import AccpetedAccountTableRow from "../components/SelectAccount/AccpetedAccountTableRow";

const accountInformation = [
  { name: "Google", status: "Accepted", isSelected: 1 },
  { name: "Microsoft", status: "Accepted", isSelected: 0 },
];

const requestInformation = [
  {
    referance: "CU1254676",
    status: "Requested",
  },
  {
    referance: "CU1254676",
    status: "Rejected",
  },
];

const SelectAccount = () => {
  return (
    <div className="p-[32px] ">
      <div>
        <div className="mb-6 flex justify-between items-start">
          <p className="font-bold text-2xl ">Select Account</p>
          <button type="" className="btn btn-primary">
            Link to New Account
          </button>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px]">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-xs font-semibold text-gray-500">
                  COMPANY NAME
                </td>
                <td className="text-xs font-semibold text-gray-500">STATUS</td>
                <td className="text-xs font-semibold text-gray-500"></td>
              </tr>
              {accountInformation.map((x) => {
                return <AccpetedAccountTableRow x={x} />;
              })}
            </tbody>
          </table>
        </div>

        <div className="mb-6 mt-10">
          <p className="font-bold text-2xl ">Requested</p>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px]">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-xs font-semibold text-gray-500">
                  REFERRENCES
                </td>
                <td className="text-xs font-semibold text-gray-500">STATUS</td>
                <td className="text-xs font-semibold text-gray-500"></td>
              </tr>
              {requestInformation.map((x) => {
                return <RequestedAccountTableRow x={x} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectAccount;
