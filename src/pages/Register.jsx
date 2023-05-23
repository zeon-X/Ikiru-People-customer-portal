import React from "react";
import logo from "../assets/cs-logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-[1440px] flex justify-center items-center">
        <div className="w-[834px]  flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center h-full">
            <img width={296} height={101} src={logo} alt="" />
            <p className="">
              This is the customer support portal for our customers in
            </p>
            <p className="">
              need to supports, Trainings, Report registration and billing.
            </p>
          </div>

          <img
            width={620}
            height={620}
            src="https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg"
            alt=""
          />
        </div>

        <div className="w-[606px] bg-[#FAFAFA] min-h-screen flex flex-col justify-center items-center">
          <div>
            <p className="font-bold text-xl">Register</p>

            <form className="my-4" action="">
              <div className="form-control w-[423px] max-w-[423px]">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                </label>
              </div>

              <div className="form-control w-[423px] max-w-[423px]">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                </label>
              </div>

              <div className="form-control w-[423px] max-w-[423px]">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                </label>
              </div>

              <div className="form-control w-[423px] max-w-[423px]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                </label>
              </div>

              <div className="form-control w-[423px] max-w-[423px]">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="label-text-alt"></span>
                </label>
              </div>

              <input
                type="submit"
                className="btn bg-primary  rounded mt-8"
                value="Register"
              />
            </form>

            <p className="text-primary">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-bold cursor-pointer"
              >
                Log in
              </span>
            </p>

            <p className="mt-12 mb-4">Register with</p>
            <button className="btn btn-outline flex justify-center items-center gap-4">
              <img
                width={24}
                height={24}
                src="https://www.freepnglogos.com/uploads/microsoft-logo-square-transparent-png-2.png"
                alt=""
              />
              <p>Microsoft ID</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
