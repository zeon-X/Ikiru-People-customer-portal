import React from "react";

const UseFullLinksModal = ({ props }) => {
  return (
    <div className="modal ">
      <div className="modal-box relative ">
        <div className="flex flex-col justify-center items-center w-full p-6 ">
          {/* TITLE AND CLOSE BTN */}
          <div className="w-full flex justify-between items-start ">
            <p className="text-lg font-bold">Details</p>
            <label htmlFor="linksDetails" className="btn btn-xs btn-circle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </label>
          </div>
        </div>
        {/* REST */}
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-info">Title</p>
          <p className="font-semibold mb-5">{props?.name}</p>

          <p className="uppercase text-sm font-semibold text-info">Date</p>
          <p className="font-semibold mb-5">{props?.date}</p>

          <p className="uppercase text-sm font-semibold text-info">Link</p>
          <div className="mb-5 flex justify-between items-center">
            <p className="font-semibold ">{props?.link}</p>
          </div>

          <button className="btn btn-secondary mt-6">Join Meetinig</button>
        </div>
      </div>
    </div>
  );
};

export default UseFullLinksModal;
