import React, { useState } from "react";
import {
  attactFileWhite,
  closeCrossWhite,
  closePopUp,
  fileUpload,
} from "../../assets/iconsSvg";

const CaseUpdateModal = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFileUpload = (event) => {
    let temUploadedFiles = [];

    Array.from(event.target.files).map((x) => temUploadedFiles.push(x));
    setUploadedFiles(temUploadedFiles);

    // console.log(temUploadedFiles);
  };

  const handleFileRemove = (ind) => {
    let temUploadedFiles = uploadedFiles.filter((x, index) => index != ind);
    //   console.log(temUploadedFiles);

    setUploadedFiles(temUploadedFiles);
  };
  return (
    <div className="modal ">
      <div className="modal-box relative lg:max-h-[890px] sm:max-h-[690px] overflow-y-auto">
        <div className="w-full flex justify-between items-start mb-4">
          <p className="text-lg font-bold">Add Update</p>
          <label
            htmlFor="my-modal-3"
            className="rounded-full bg-info cursor-pointer p-0.5 flex justify-center items-center"
          >
            {closePopUp}
          </label>
        </div>

        {/* FORM */}

        <form className="mx-auto w-full">
          <div className="form-control w-full max-w-[470px]">
            <label className="label">
              <span className="text-[14px] font-medium">Update Title</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-[470px] text-[14px] font-[Manrope]"
            />
            <label className="label">
              <span className="text-[14px] text-info"></span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-[14px] font-medium">
                Update Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-[243px] w-full max-w-[470px] text-[14px] font-[Manrope]"
              placeholder="Write Description..."
            ></textarea>
          </div>
          {/* DISPLAY FILES */}

          {/* FILE INPUT */}
          <div className="mt-8">
            {uploadedFiles.map((x, index) => {
              return (
                <div
                  key={index}
                  index={index}
                  className="flex justify-between items-center rounded-full p-2 bg-[#14b13b] mb-4"
                >
                  <div className="flex items-center gap-2 text-white">
                    {attactFileWhite}
                    <p className="text-[14px] font-semibold ">{x?.name}</p>
                  </div>{" "}
                  <div
                    className="cursor-pointer"
                    onClick={() => handleFileRemove(index)}
                  >
                    {closeCrossWhite}
                  </div>
                </div>
              );
            })}
            <input
              onChange={handleFileUpload}
              type="file"
              id="fileUpload"
              className="hidden"
              multiple
            />

            <label
              htmlFor="fileUpload"
              className="border border-primary border-dashed py-3.5 rounded-lg w-full max-w-[470px] flex justify-center items-center gap-2 bg-[#e7f7eb] cursor-pointer"
            >
              {fileUpload}
              <p className="text-[14px] font-medium text-primary">
                Upload Documents
              </p>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary rounded mt-8 gap-2 text-white py-2.5"
          >
            Add Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaseUpdateModal;
