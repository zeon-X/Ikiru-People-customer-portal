import React from "react";

const AdditionalContactsRow = ({ x }) => {
  return (
    <tr>
      <td className="text-gray-600 font-semibold ">
        <div>
          <p className="text-lg">{x?.name}</p>
          <p>{x?.email}</p>
        </div>
      </td>
      <td className="text-center">
        <div className="flex flex-wrap gap-1">
          {x?.access?.map((index) => {
            return (
              <p className="bg-gray-100 text-gray-500 font-bold rounded-full px-3 py-1.5  text-xs ">
                {index}
              </p>
            );
          })}
        </div>
      </td>
      <td className="flex justify-end gap-2">
        <button className="border border-[#fc4616] bg-[#fff5f2] text-[#fc4616] px-[10px] py-[4px] rounded-[4px]">
          Cancle Invite
        </button>
        <button className="border px-[10px] py-[4px] rounded-[4px]">
          Manage User
        </button>
      </td>
    </tr>
  );
};

export default AdditionalContactsRow;
