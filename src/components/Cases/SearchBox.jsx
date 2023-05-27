import React from "react";
import { searchSvg } from "../../assets/iconsSvg";

const SearchBox = () => {
  return (
    <div className="border bg-white rounded-lg flex gap-2 justify-center items-center relative py-3 px-4">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none  w-full max-w-xs text-[14px] font-[Manrope]"
      />
      <button className="pr-2">{searchSvg}</button>
    </div>
  );
};

export default SearchBox;
