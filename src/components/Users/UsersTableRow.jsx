import React from "react";

const UsersTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-gray-600 font-semibold ">
        <div className="flex justify-start items-center gap-2">
          <img
            height={40}
            width={40}
            className="rounded-full"
            src={x?.img === "" ? "" : x?.img}
            alt="img"
          />
          <div>
            <p className="text-lg">{x?.name}</p>
            <p>{x?.email}</p>
          </div>
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
      <td className=" ">
        <button className="border px-[10px] py-[4px] rounded-[4px]">
          Manage User
        </button>
      </td>
    </tr>
  );
};

export default UsersTableRow;
