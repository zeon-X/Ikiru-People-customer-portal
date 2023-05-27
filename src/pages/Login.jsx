import React from "react";
import logo from "../assets/cs-logo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-[1440px] flex lg:flex-row sm:flex-col justify-center items-center">
        <div className="lg:w-[834px] sm:w-auto  flex flex-col justify-center items-center h-full">
          <img width={296} height={101} src={logo} alt="" />{" "}
          <div className="flex flex-col items-center h-full px-[32px]">
            <p className=" text-center">
              This is the customer support portal for our customers in
              <br />
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

        <div className="lg:w-[606px] sm:w-full bg-[#FAFAFA] min-h-screen flex flex-col justify-center items-center">
          <div>
            <p className="font-bold text-xl">Login</p>

            <form className="my-4" action="">
              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
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

              <div className="form-control lg:w-[423px] sm:w-full max-w-[423px]">
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

              <p>
                Forgot Your password? <span>Reset</span>
              </p>

              <input
                type="submit"
                className="btn bg-primary w-full rounded mt-8"
                value="Login"
              ></input>
            </form>

            <p className="text-primary">
              Do not have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="font-bold cursor-pointer"
              >
                Register
              </span>
            </p>

            <p className="mt-12 mb-4">Log in with</p>
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

export default Login;

// Developed By
// Md.Shefat Zeon
// 2023-05-23
