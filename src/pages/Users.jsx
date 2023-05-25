import React from "react";
import UsersTableRow from "../components/Users/UsersTableRow";
import AdditionalContactsRow from "../components/Users/AdditionalContactsRow";
import CreateNewContactModal from "../components/Users/CreateNewContactModal";
import InvitationSuccessModal from "../components/Users/InvitationSuccessModal";

import imgicon from "../assets/Users/person.svg";

const userInfo = [
  {
    name: "chriscaw",
    email: "example566@gmail.com",
    img: imgicon,
    access: ["Admin", "Biling", "Support(User Only)", "Suppoert(User Only)"],
    id: 1,
  },
  {
    name: "Joe Charlie",
    email: "example566@gmail.com",
    img: imgicon,
    access: ["Biling", "Support(User Only)", "Suppoert(User Only)"],
    id: 2,
  },
  {
    name: "Joe Charlie",
    email: "example566@gmail.com",
    img: imgicon,
    access: ["Biling", "Support(User Only)", "Suppoert(User Only)"],
    id: 3,
  },
];

const Users = () => {
  return (
    <div className="p-[32px] ">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="AddNewContactModal" className="modal-toggle" />
      <CreateNewContactModal />

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="invitationSuccessModal"
        className="modal-toggle"
      />
      <InvitationSuccessModal />

      <div>
        <div className="mb-6 flex justify-between items-start">
          <p className="font-bold text-[24px] ">Users</p>

          <div className="">
            <label htmlFor="invitationSuccessModal" className="btn mx-2">
              Invitation Success Modal
            </label>
            <label
              htmlFor="AddNewContactModal"
              className="btn btn-primary text-[14px] normal-case"
            >
              Add New User
            </label>
          </div>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px] overflow-x-auto">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-[12px] font-semibold text-info font-Manrope">
                  USER DETAILS
                </td>
                <td className="text-[12px] font-semibold text-info font-Manrope">
                  ACCESS
                </td>
                <td className="text-[12px] font-semibold text-info font-Manrope"></td>
              </tr>
              {userInfo.map((x) => {
                return <UsersTableRow x={x} />;
              })}
            </tbody>
          </table>
        </div>

        <div className="mb-6 mt-12">
          <p className="font-bold text-[24px] ">Additional contacts</p>
          <p className="text-info mt-2 text-[16px]">
            These are additional contacts that we have a record of, but have not
            signed up to this portal
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl mt-[26px] overflow-x-auto">
          <table className="table w-full  ">
            <tbody>
              <tr>
                <td className="text-[12px] font-semibold text-info font-Manrope">
                  FULL NAME
                </td>
                <td className="text-[12px] font-semibold text-info font-Manrope">
                  ACCESS
                </td>
                <td className="text-[12px] font-semibold text-info font-Manrope"></td>
              </tr>
              {userInfo.map((x) => {
                return <AdditionalContactsRow x={x} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

// Developed By
// Md.Shefat Zeon
// 2023-05-23
