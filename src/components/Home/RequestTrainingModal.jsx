import React from "react";

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
              className="btn btn-xs btn-circle "
            >
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
