import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import Notification from "./Notification"; // Ensure you have this component
import { adminSignOut } from "../../Services/authServices";
import { useDispatch } from "react-redux";
import useToast from "../../hooks/useToast";
import useRouter from "../../hooks/useRouter";
import useLocalStorage from "../../hooks/useLocalStorage";
import { logOut } from "../../Store/userAuthSlice";

const Dashboardheader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { successToast, errorToast, warningToast } = useToast();
  const { clearStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async (e) => {
    const res = await adminSignOut(e, successToast, errorToast);
    console.log("🚀 + handleLogout + res:", res);
    dispatch(logOut()), clearStorage("authToken"), navigate("/");
  };

  return (
    <div>
      <div className="bg-[#1f2937] h-[4em] w-full flex items-center justify-end px-[3rem]">
        <div className="flex flex-row gap-3 items-center relative">
          <Notification />
          <IoSettings
            className="text-3xl text-white hover:cursor-pointer"
            onClick={handleMenuToggle}
          />
          <div
            className={`absolute right-0 top-[4em] bg-white shadow-md rounded p-2 transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={(e) => handleLogout(e)}
              className="text-black hover:bg-gray-200 px-4 py-2 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardheader;
