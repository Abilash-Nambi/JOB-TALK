import React from "react";
import signUp from "../../Assets/images/signUpImg.png";
import logo from "../../../public/images/logo.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
      <h1 className="text-2xl font-semibold">Sign up</h1>
      <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5">
        <div className="hidden md:block ">
          <img src={signUp} alt="" className="w-[25em]" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
          <div className="text-center justify-center items-center flex flex-col gap-3 relative">
            <div>
              <Link to="/">
                <img src={logo} alt="" className="h-22 w-20" />
              </Link>
            </div>

            {errors.email && (
              <span className="text-red-500 text-xs absolute top-[12em] right-[6em]">
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
              autocomplete="off"
            />

            {errors.userName && (
              <span className="text-red-500 text-xs absolute top-[15em] right-[6em]">
                {errors.password.message}
              </span>
            )}
            <input
              {...register("userName", {
                required: "Username is required",
              })}
              className={`border block px-3 py-2 placeholder:text-xs ${
                errors.userName ? "border-red-500 placeholder:text-xs" : ""
              }`}
              type="text"
              placeholder="Username"
              autocomplete="off"
            />

            {errors.password && (
              <span className="text-red-500 text-xs absolute top-[15em] right-[6em]">
                {errors.password.message}
              </span>
            )}
            <input
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one numeric digit, and one special character",
                },
              })}
              className={`border block px-3 py-2 placeholder:text-xs${
                errors.password ? "border-red-500 placeholder:text-xs" : ""
              }`}
              type="password"
              placeholder="Password"
              autocomplete="off"
            />

            {errors.confirmPassword && (
              <span className="text-red-500 text-xs absolute top-[21em] right-[6em]">
                {errors.confirmPassword.message}
              </span>
            )}

            <input
              {...register("Confirm Password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className={`border block px-3 py-2 placeholder:text-xs ${
                errors.confirmPassword
                  ? "border-red-500 placeholder:text-xs"
                  : ""
              }`}
              type="password"
              placeholder="Confirm password"
              autocomplete="off"
            />

            <input
              type="submit"
              className="py-1 px-4 border rounded bg-blue text-white text-sm"
              value="Sign up"
            />
            <p className="text-sm">
              Are you a Employer looking for list your job?
              <Link to="/recruiter/sign-up">
                <span className="text-blue font-semibold mt-0"> Click me </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
