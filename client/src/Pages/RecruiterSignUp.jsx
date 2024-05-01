import React from "react";
import signUp from "../assets/images/signUpImg.png";
import logo from "../../public/images/logo.jpg";
import Button from "../components/Button";
import Input from "../components/Input";
import image from "../assets/images/recruiterSIgnup.jpeg";
import { useForm } from "react-hook-form";
const RecruiterSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
      <h1 className="text-2xl font-semibold">Recruiter Sign up</h1>
      <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5 ">
        <div className="hidden md:block ">
          <img src={image} alt="" className="w-[23em] h-[20em]" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center justify-center items-center flex flex-col gap-3 relative">
            <div>
              <img src={logo} alt="" className="h-22 w-20" />
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs absolute top-[7em] right-[6em]">
                {errors.email.message}
              </span>
            )}
            <input
              placeholder="email@gmail.com"
              className={`border block px-3 py-2 ${
                errors.password ? "border-red-500" : ""
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
              className={`border block px-3 py-2 ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
            />

            {errors.confirmPassword && (
              <span className="text-red-500 text-xs absolute top-[16em] right-[6em]">
                {errors.confirmPassword.message}
              </span>
            )}

            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              className={`border block px-3 py-2 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              type="password"
            />

            <input
              type="submit"
              className="py-2 px-5 border rounded bg-blue text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterSignUp;
