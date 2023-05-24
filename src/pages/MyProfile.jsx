import React, { useState } from "react";

const MyProfile = () => {
  const [userName, setUserName] = useState("maxberty");
  return (
    <div className="p-[32px]">
      <div>
        <p className="font-bold text-2xl mb-12">My Profile</p>

        <form className="bg-white rounded-lg ">
          <div className="p-8 border-b">
            <p className="font-bold text-lg mb-12">Account Settings</p>

            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-semibold">Username</span>
              </label>
              <input
                type="text"
                value={userName}
                placeholder="Type Here"
                className="input input-bordered w-full max-w-sm rounded"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <label className="label">
                <span className="label-text-alt text-gray-400">
                  Note that you cannot change your username more than twice per
                  hour. Choose wisely.
                </span>
              </label>
            </div>
          </div>

          <div className="p-8">
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
                <button className="font-bold text-xs px-2 py-1 bg-gray-400 text-white rounded-md">
                  Hide
                </button>
              </label>
              <input
                type="password"
                placeholder="Current Password"
                className="input input-bordered w-full max-w-sm rounded"
              />
              <label className="label">
                <span className="label-text-alt text-gray-400"></span>
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="input input-bordered w-full max-w-sm rounded"
              />
              <label className="label mb-4">
                <span className="label-text-alt text-gray-400">
                  Minimum 6 characters
                </span>
              </label>

              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-sm rounded"
              />
              <label className="label">
                <span className="label-text-alt text-gray-400">
                  Minimum 6 characters
                </span>
              </label>
            </div>
            <input
              type="submit"
              className="btn bg-primary  rounded mt-8"
              value="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;

// Developed By
// Md.Shefat Zeon
// 2023-05-23
