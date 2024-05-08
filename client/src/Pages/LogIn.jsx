import React from "react";
import loginImg from "../Assets/images/loginImg.png";
import logo from "../../public/images/logo.jpg";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5 md:items-center">
        <div className="hidden md:block ">
          <img src={loginImg} alt="" className="w-[25em]" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center justify-center items-center flex flex-col gap-3 relative">
            <div>
              <Link to="/">
                {" "}
                <img src={logo} alt="" className="h-22 w-20" />
              </Link>
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs absolute top-[7em] right-[6em]">
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
            {errors.password && (
              <span className="text-red-500 text-xs absolute top-[12em] right-[6em]">
                {errors.password.message}
              </span>
            )}
            <input
              {...register("password", {
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
              placeholder="Admin@123"
            />

            {errors.confirmPassword && (
              <span className="text-red-500 text-xs absolute top-[16em] right-[6em]">
                {errors.confirmPassword.message}
              </span>
            )}

            {/* <input
              {...register("confirmPassword", {
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
              placeholder="Admin@123"
            /> */}

            <input
              type="submit"
              className="py-1 px-4 border rounded bg-blue text-white text-sm"
              value="Sign In"
            />
            <p className="text-sm">
              Don't have account yet ?
              <Link to="/sign-up">
                <span className="text-blue font-semibold mt-0"> Click me </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
