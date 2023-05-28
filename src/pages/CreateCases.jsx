import React, { useState } from "react";
import { downloadFile, sendSVG } from "../assets/iconsSvg";
const ProductInfo = () => {
  return (
    <div className="p-8 max-w-[322px] bg-white rounded-2xl text-[13px] flex flex-col gap-2 ">
      <p>Open Services Incidents*</p>
      <p>Possible SasS Outage</p>
      <p>Disrution Reported - Investigating</p>
      <p>2023-03-21, 08:00:00</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>

      <div className="divider"></div>

      <p>*All times are in UTC</p>
    </div>
  );
};

const CreateCases = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isProductSelected, setIsProductSelected] = useState(false);

  // console.log(isProductSelected);
  return (
    <div className="p-[32px]  mx-auto max-w-[1190px] h-full">
      <div>
        <div className="mb-6 flex justify-between items-start">
          <p className="font-bold text-[24px] ">Create Case</p>
          <button
            type=""
            className="btn btn-primary text-[14px] normal-case gap-2 lg:w-[212px] sm:w-auto"
          >
            {downloadFile}
            <p> Download ISL Client</p>
          </button>
        </div>

        <div className="flex items-start">
          <form className="w-full" action="">
            <div className="form-control lg:w-[523px] max-w-[523px] text-[14px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Select Product
                </span>
              </label>
              <select
                onChange={() => setIsProductSelected(true)}
                className="font-normal select select-bordered"
              >
                <option disabled selected>
                  Product
                </option>
                <option>FFAnyWhere</option>
                <option>Infinity</option>
                <option>Mid-office</option>
              </select>
              <label className="label">
                <span
                  onClick={() => setIsToggleActive(!isToggleActive)}
                  className={
                    !isProductSelected
                      ? "hidden"
                      : "text-[12px] text-info cursor-pointer"
                  }
                >
                  {isToggleActive ? "Close product info" : "See product info"}
                </span>
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <div className="lg:hidden sm:block">
              {isToggleActive ? <ProductInfo /> : <></>}
            </div>

            <div className="form-control w-full max-w-[523px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Select Database
                </span>
              </label>
              <select className="font-normal select select-bordered ">
                <option disabled selected>
                  Database
                </option>
                <option>FFSABV-DB</option>
                <option>Mo Test DB</option>
                <option>Portal Test DB</option>
              </select>
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <div className="form-control w-full max-w-[523px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Case Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Type title"
                className="input input-bordered w-full text-[14px] max-w-[523px]"
              />
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <div className="form-control max-w-[523px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Case Description
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-[136px] max-w-[523px]"
                placeholder="Write Description"
              ></textarea>
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <div className="form-control w-full max-w-[523px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Select Priority
                </span>
              </label>
              <select className="font-normal select select-bordered">
                <option disabled selected>
                  Priority
                </option>
                <option>P1</option>
                <option>P2</option>
                <option>P3</option>
                <option>P4</option>
              </select>
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <div className="form-control w-full max-w-[523px]">
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]">
                  Case Type
                </span>
              </label>
              <select className="font-normal select select-bordered">
                <option disabled selected>
                  Select case support type
                </option>
                <option>Support</option>
                <option>Client Success</option>
              </select>
              <label className="label">
                <span className="text-dark font-semibold  text-[14px]"></span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full max-w-[523px] gap-2 mt-6"
            >
              {sendSVG}
              <p className="text-[14px]">Submit</p>
            </button>
          </form>

          <div className="lg:block sm:hidden mt-9 ml-9">
            {isToggleActive ? <ProductInfo /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCases;
