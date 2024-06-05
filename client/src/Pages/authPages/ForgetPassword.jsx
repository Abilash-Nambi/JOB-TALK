import React from "react";
import logo from "../../../public/images/logo.png";
const ForgetPassword = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-24 h-screen justify-center items-center flex flex-col">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <div className="grid md:grid-cols-2 shadow-2xl px-5 py-5 md:items-center">
          <div className="hidden md:block ">
            <img src={loginImg} alt="" className="w-[25em]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center justify-center items-center flex flex-col gap-3 ">
              <div>
                <Link to="/">
                  {" "}
                  <img src={logo} alt="" className="h-22 w-20" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
