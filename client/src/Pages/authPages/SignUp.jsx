import React, { useState } from "react";
import signUp from "../../assets/images/signUpImg.png";
import logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../Services/authServices";
import useToast from "../../hooks/useToast";
import useRouter from "../../hooks/useRouter";
import CustomLoader from "../../components/CustomLoader";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast, warningToast } = useToast();
  const { navigate } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // let error = Object.values(errors);
  // error.forEach((text) => errorToast(  );
  errorToast(errors?.password?.message);

  const onSubmit = async (data) => {
    try {
      const response = await userSignUp(data, successToast, errorToast);
      const { status } = response;
      if (status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/auth/sign-in");
        }, 3000);
      }
    } catch (error) {
      console.log("🚀 + onSubmit + error:", error);
    }
  };

  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
          <h1 className="text-2xl font-semibold">Sign up</h1>
          {errorToast(errors)}
          <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5">
            <div className="hidden md:block ">
              <img src={signUp} alt="" className="w-[25em]" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="text-center justify-center items-center flex flex-col gap-3 ">
                <div>
                  <Link to="/">
                    <img src={logo} alt="" className="h-22 w-20" />
                  </Link>
                </div>
                <div className="relative">
                  {errors.role && (
                    <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                      {errors.role.message}
                    </span>
                  )}
                  <select
                    {...register("role", {
                      required: "Please select a role",
                    })}
                    className={`border block px-3 py-2  bg-white${
                      errors.role ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select Role</option>
                    <option value="Job Seeker">Job Seeker</option>
                    <option value="Employer">Employer</option>
                  </select>
                </div>
                <div className="relative">
                  {" "}
                  {errors.email && (
                    <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                      {errors.email.message}
                    </span>
                  )}
                  <input
                    placeholder="email@gmail.com"
                    className={`border block px-3 py-2 placeholder:text-xs${
                      errors.email ? "border-red-500" : "border"
                    }`}
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    autoComplete="off"
                  />
                </div>
                <div className="relative">
                  {errors.userName && (
                    <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                      {errors.userName.message}
                    </span>
                  )}
                  <input
                    {...register("userName", {
                      required: "Username is required",
                    })}
                    className={`border block px-3 py-2 placeholder:text-xs ${
                      errors.userName
                        ? "border-red-500 placeholder:text-xs"
                        : ""
                    }`}
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                  />
                </div>
                <div className="relative">
                  {/* {errors.password && (
              <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                {errors.password.message}
              </span>
            )} */}
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one numeric digit, and one special character",
                      },
                    })}
                    className={`border block px-3 py-2 placeholder:text-xs${
                      errors.password
                        ? "border-red-500 placeholder:text-xs"
                        : ""
                    }`}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>
                <div className="relative">
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-xs absolute top-[-15px] right-[0px]">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") ||
                        "The passwords do not match",
                    })}
                    className={`border block px-3 py-2 placeholder:text-xs ${
                      errors.confirmPassword
                        ? "border-red-500 placeholder:text-xs"
                        : ""
                    }`}
                    type="password"
                    placeholder="Confirm password"
                    autoComplete="off"
                  />
                </div>

                <input
                  type="submit"
                  className="py-1 px-4 border rounded bg-blue text-white text-sm"
                  value="Sign up"
                />
                <p className="text-sm">
                  Already you registered ?
                  <Link to="/auth/sign-in">
                    <span className="text-blue font-semibold mt-0">
                      Click me
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default SignUp;
