import React from "react";
import logo from "../../../public/images/logo.png";
import forgotPassword from "../../Assets/images/Forgot-password.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    console.log("🚀 + onSubmit + formData:", formData);
  };
  return (
    <div>
      <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
        <h1 className="text-2xl font-semibold">Reset Password</h1>
        <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5 md:items-center">
          <div className="hidden md:block ">
            <img src={forgotPassword} alt="" className="w-[25em]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center justify-center items-center flex flex-col gap-3 ">
              <Link to="/">
                {" "}
                <img src={logo} alt="" className="h-22 w-20" />
              </Link>

              <div className="relative">
                {errors.email && (
                  <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                    {errors.email.message}
                  </span>
                )}
                <input
                  placeholder="email@gmail.com"
                  className={`border block px-3 py-2 placeholder:text-xs${
                    errors.password ? "border-red-500 placeholder:text-xs" : ""
                  }`}
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              <input
                type="submit"
                className="py-1 px-4 border rounded bg-blue text-white text-sm capitalize w-[262px]"
                value="RESET PASSWORD"
              />
              <p className="text-sm">
                Back to
                <Link to="/auth/sign-in">
                  <span className="text-blue font-semibold mt-0 ml-1">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
