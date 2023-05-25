import React from "react";

const CreateNewContactModal = () => {
  return (
    <div className="modal ">
      <div className="modal-box relative ">
        <div className="flex flex-col justify-center items-center w-full p-6 ">
          {/* TITLE AND CLOSE BTN */}
          <div className="w-full flex justify-between items-start mb-10">
            <p className="text-lg font-bold"> Add New Contact</p>
            <label
              htmlFor="AddNewContactModal"
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

          <form className="mx-auto w-full">
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-sm rounded"
              />
              <label className="label">
                <span className="label-text-alt text-info"></span>
              </label>
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm rounded"
              />
              <label className="label">
                <span className="label-text-alt text-info"></span>
              </label>
            </div>

            <div className="mt-10">
              <p className=" text-info mb-2"> Give access to the person</p>

              <label className="label cursor-pointer justify-start gap-3 mb-1">
                <input
                  type="checkbox"
                  name=""
                  className="checkbox checkbox-sm rounded"
                />
                <span className="text-info text-sm">Admin</span>
              </label>

              <label className="label cursor-pointer justify-start gap-3 mb-1">
                <input
                  type="checkbox"
                  name=""
                  className="checkbox checkbox-sm rounded"
                />
                <span className="text-info text-sm">Billing</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3 mb-1">
                <input
                  type="checkbox"
                  name=""
                  className="checkbox checkbox-sm rounded"
                />
                <span className="text-info text-sm">Support (User only)</span>
              </label>
              <label className="label cursor-pointer justify-start gap-3 mb-1">
                <input
                  type="checkbox"
                  name=""
                  className="checkbox checkbox-sm rounded"
                />
                <span className="text-info text-sm">User</span>
              </label>
            </div>

            <button type="submit" className="btn bg-primary rounded mt-8 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>

              <span className="text-white">Send Invite</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContactModal;
