import React from "react";
import signUp from "../assets/images/signUpImg.png";
import logo from "../../public/images/logo.jpg";
import Button from "../components/Button";
const SignUp = () => {
  return (
    <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
      <h1 className="text-2xl font-semibold">Sign up</h1>
      <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5">
        <div className="hidden md:block ">
          <img src={signUp} alt="" className="w-[25em]" />
        </div>
        <div className="text-center justify-center items-center flex flex-col gap-3 ">
          <div>
            <img src={logo} alt="" className="h-22 w-20" />
          </div>
          <input
            type="email"
            placeholder="email@gmail.com"
            className="border block px-3 py-2"
          />
          <input
            type="password"
            placeholder="password"
            className="border block px-3 py-2"
          />
          <input
            type="password"
            placeholder="confirm password"
            className="border block px-3 py-2"
          />
          <Button
            title="Sign Up"
            className="py-2 px-5 border rounded bg-blue text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;