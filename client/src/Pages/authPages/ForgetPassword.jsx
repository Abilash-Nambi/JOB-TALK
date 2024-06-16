import React from "react";
import logo from "../../../public/images/logo.png";
import forgotPasswordImg from "../../assets/images/Forgot-password.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { forgotPassword, resetPassword } from "../../Services/authServices";
import useToast from "../../hooks/useToast";
import useRouter from "../../hooks/useRouter";
import CustomOtpInput from "../../components/OtpInput";
import { useState } from "react";
import { Loader } from "../../components/CustomLoader";

const ForgetPassword = () => {
  const { successToast, errorToast } = useToast();
  const { navigate } = useRouter();
  const [otp, setOtp] = useState("");
  //console.log("🚀 + ForgetPassword + otp:", otp);
  const [showOtp, setShowOtp] = useState(false);
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    console.log("🚀 + onSubmit + formData:", formData);
    const { email } = formData;
    console.log("🚀 + onSubmit + email:", email);
    if (email) {
      setLoader(true);
      const res = await forgotPassword(email, successToast, errorToast);
      if (res?.status === 200) {
        setTimeout(() => {
          setShowOtp(true);
          reset();
          setLoader(false);
        }, 4000);
      } else {
        setLoader(false);
      }
    } else {
      const { password } = formData;
      setLoader(true);
      console.log("🚀 + onSubmit + password:", password);
      const data = {
        resetCode: otp,
        newPassword: password,
      };
      const res = await resetPassword(data, successToast, errorToast);
      if (res?.status === 200) {
        setTimeout(() => {
          navigate("/auth/sign-in");
          setLoader(false);
        }, 4000);
      } else {
        setLoader(false);
      }
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
        <h1 className="text-2xl font-semibold">Reset Password</h1>
        <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5 md:items-center">
          <div className="hidden md:block ">
            <img src={forgotPasswordImg} alt="" className="w-[25em]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center justify-center items-center flex flex-col gap-3 ">
              <Link to="/">
                {" "}
                <img src={logo} alt="" className="h-22 w-20" />
              </Link>
              {loader && <Loader />}

              {!showOtp ? (
                <div>
                  <div className="relative">
                    {errors.email && (
                      <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                        {errors.email.message}
                      </span>
                    )}
                    <input
                      placeholder="email@gmail.com"
                      className={`border block px-3 py-2 placeholder:text-xs${
                        errors.password
                          ? "border-red-500 placeholder:text-xs"
                          : ""
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
                    className="cursor-pointer py-1 px-4 border rounded bg-blue text-white text-sm capitalize w-[262px] mt-2"
                    value="SEND OTP"
                  />
                </div>
              ) : (
                <div className="text-center justify-center items-center flex flex-col gap-3">
                  <CustomOtpInput otp={otp} setOtp={setOtp} />

                  <div className="relative">
                    {errors.password && (
                      <span className="text-red-500 text-xs absolute top-[-15px] right-[0px] w-max">
                        {errors.password.message}
                      </span>
                    )}
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 5,
                          message:
                            "Password must be at least 5 characters long",
                        },
                        // pattern: {
                        //   value:
                        //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/,
                        //   message:
                        //     "Password must contain at least one uppercase letter, one numeric digit, and one special character",
                        // },
                      })}
                      className={`border block px-3 py-2 placeholder:text-xs${
                        errors.password
                          ? "border-red-500 placeholder:text-xs"
                          : ""
                      }`}
                      type="password"
                      placeholder="Enter New Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="py-1 px-4 border rounded bg-blue text-white text-sm capitalize w-[262px] mt-2"
                    value="SUMBIT OTP"
                  />
                </div>
              )}

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
