import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { userSignIn } from "../../Services/authServices";
import useToast from "../../hooks/useToast";
import useRouter from "../../hooks/useRouter";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../Store/userAuthSlice";
import { getProfile } from "../../Services/api/UserEndpoints";
import CustomLoader from "../../components/CustomLoader";
import loginImg from "../../Assets/images/loginImg.png";
import logo from "../../../public/images/logo.png";

export const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast, warningToast } = useToast();

  const { navigate } = useRouter();
  const { setStorage } = useLocalStorage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const isAuthenticated = useSelector((state) => state.user);
  // console.log("🚀 + LogIn + isAuthenticated:", isAuthenticated);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    try {
      const response = await userSignIn(formData, successToast, errorToast);
      const { status, data } = response;
      if (status === 200) {
        setLoading(true);
        setStorage("authToken", data.token);
        getUser();

        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 3000);
      }
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("🚀 + onSubmit + error:", error);
    }
  };
  const getUser = async () => {
    try {
      const response = await getProfile();
      dispatch(logIn(response.data.data));
      setStorage("user", JSON.stringify(response.data.data));
    } catch (error) {
      console.log("🚀 + getUser + error:", error);
    }
  };
  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
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
                        message: "Password must be at least 5 characters long",
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
                    placeholder="Password"
                  />
                </div>

                <input
                  type="submit"
                  className="py-1 px-4 border rounded bg-blue text-white text-sm"
                  value="Sign In"
                />
                <p className="text-sm">
                  <Link to="/auth/forget-password">
                    <span className="text-blue font-semibold mt-0">
                      Forget Password ?
                    </span>
                  </Link>
                </p>
                <p className="text-sm">
                  Don't have account yet ?
                  <Link to="/auth/sign-up">
                    <span className="text-blue font-semibold mt-0">
                      Click me
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
