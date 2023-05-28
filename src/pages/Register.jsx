import React from "react";
import logo from "../assets/cs-logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto  h-full">
      <div className="mx-auto min-h-screen  grid lg:grid-cols-2 sm:grid-cols-1  justify-center items-center gap-10">
        <div className="lg:flex sm:hidden justify-end">
          <div className="flex flex-col gap-6 justify-center items-center h-full">
            <img width={296} height={101} src={logo} alt="" />

            <p className="text-[14px] font-[Manrope] ">
              This is the customer support portal for our customers in
              <br />
              need to supports, Trainings, Report registration and billing.
            </p>

            <img
              className="lg:w-[620px] sm:w-auto lg:h-[620px] sm:h-auto "
              src="https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="lg:px-20 sm:px-6 w-full bg-[#FAFAFA] min-h-screen flex flex-col justify-center items-start">
          <div className="w-full">
            <p className="font-bold text-[18px]">Register</p>

            <form className="my-4  max-w-[423px]" action="">
              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
                <label className="label">
                  <span className="text-[14px] text-info">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="text-[14px] input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="text-[14px] text-info-alt"></span>
                </label>
              </div>

              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
                <label className="label">
                  <span className="text-[14px] text-info">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="text-[14px] input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="text-[14px] text-info-alt"></span>
                </label>
              </div>

              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
                <label className="label">
                  <span className="text-[14px] text-info">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-[14px] input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="text-[14px] text-info-alt"></span>
                </label>
              </div>

              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
                <label className="label">
                  <span className="text-[14px] text-info">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="text-[14px] input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="text-[14px] text-info-alt"></span>
                </label>
              </div>

              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
                <label className="label">
                  <span className="text-[14px] text-info">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="text-[14px] input input-bordered w-full max-w-[423px] rounded"
                />
                <label className="label">
                  <span className="text-[14px] text-info-alt"></span>
                </label>
              </div>

              <input
                type="submit"
                className="btn bg-primary normal-case text-white rounded mt-8"
                value="Register"
              />
            </form>

            <p className="text-primary text-[14px] font-medium">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="font-bold text-[14px] cursor-pointer"
              >
                Log in
              </span>
            </p>

            <p className="mt-12 mb-4 text-[14px] text-info">Register with</p>
            <button className="btn btn-outline flex justify-center normal-case items-center gap-4">
              <img
                width={24}
                height={24}
                src="https://www.freepnglogos.com/uploads/microsoft-logo-square-transparent-png-2.png"
                alt=""
              />
              <p className="text-[14px] font-medium">Microsoft ID</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// Developed By
// Md.Shefat Zeon
// 2023-05-23
