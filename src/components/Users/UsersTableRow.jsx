import React from "react";

const UsersTableRow = ({ x }) => {
  return (
    <tr>
      <td className="text-gray-600 font-semibold ">
        <div className="flex justify-start items-center gap-2">
          <div className="rounded-full bg-warning w-[40px] h-[40px] flex justify-center items-center">
            <img
              height={20}
              width={20}
              src={x?.img === "" ? "" : x?.img}
              alt="img"
            />
          </div>
          <div>
            <p className="text-[16px]">{x?.name}</p>
            <p className="text-[12px] text-info">{x?.email}</p>
          </div>
        </div>
      </td>
      <td className="text-center">
        <div className="flex flex-wrap gap-1">
          {x?.access?.map((index) => {
            return (
              <p className="bg-gray-100 text-info font-bold rounded-full px-3 py-1.5  text-xs ">
                {index}
              </p>
            );
          })}
        </div>
      </td>
      <td className=" ">
        <button className="border text-[14px] px-[10px] py-[4px] rounded-[4px]">
          Manage User
        </button>
      </td>
    </tr>
  );
};

export default UsersTableRow;
