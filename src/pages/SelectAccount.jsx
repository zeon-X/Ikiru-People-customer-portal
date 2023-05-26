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
          <p className="font-bold text-[24px] ">Select Account</p>
          <button type="" className="btn btn-primary text-[14px] normal-case">
            Link to New Account
          </button>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px] overflow-x-auto">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-[12px] font-semibold text-info font-[Manrope]">
                  COMPANY NAME
                </td>
                <td className="text-[12px] font-semibold text-info font-[Manrope]">
                  STATUS
                </td>
                <td className="text-[12px] font-semibold text-info font-[Manrope]"></td>
              </tr>
              {accountInformation.map((x) => {
                return <AccpetedAccountTableRow x={x} />;
              })}
            </tbody>
          </table>
        </div>

        <div className="mb-6 mt-10">
          <p className="font-bold text-[24px] ">Requested</p>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px] overflow-x-auto">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-[12px] font-semibold text-info font-[Manrope]">
                  REFERRENCES
                </td>
                <td className="text-[12px] font-semibold text-info font-[Manrope]">
                  STATUS
                </td>
                <td className="text-[12px] font-semibold text-info font-[Manrope]"></td>
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

// Developed By
// Md.Shefat Zeon
// 2023-05-23
