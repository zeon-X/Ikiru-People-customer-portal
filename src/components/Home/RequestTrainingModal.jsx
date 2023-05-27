import React from "react";
import { closePopUp } from "../../assets/iconsSvg";

const RequestTrainingModal = () => {
  return (
    <div className="modal ">
      <div className="modal-box relative ">
        <div className="flex flex-col justify-center items-center w-full p-6 ">
          {/* TITLE AND CLOSE BTN */}
          <div className="w-full flex justify-between items-start mb-10">
            <p className="text-lg font-bold">Request for Training</p>
            <label
              htmlFor="reqTrainingModal"
              className="rounded-full bg-info cursor-pointer p-0.5 flex justify-center items-center "
            >
              {closePopUp}
            </label>
          </div>

          {/* FORM */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mx-auto w-full"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info">
                  Purpose of the training
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-[298px] bg-slate-100"
                placeholder="Type here"
              ></textarea>
            </div>

            <label
              htmlFor="reqRecSuccess"
              className="btn bg-primary rounded mt-8 gap-2 text-white"
            >
              Send Request
            </label>

            {/* <button type="submit" className="btn bg-primary rounded mt-8 gap-2">
              <span className="text-white">Send Request</span>
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestTrainingModal;
