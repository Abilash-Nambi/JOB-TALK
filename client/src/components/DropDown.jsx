import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { userSignOut } from "../Services/authServices";
import useToast from "../hooks/useToast";
import useRouter from "../hooks/useRouter";
import useLocalStorage from "../hooks/useLocalStorage";
import { logOut } from "../Store/userAuthSlice";
import { useDispatch } from "react-redux";

function DropDown({ title, dropDownMenu, avatar, avatarTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const { successToast, errorToast, warningToast } = useToast();
  const { clearStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center "
      >
        {avatar === "true" && <Avatar title={avatarTitle} />}
        {title.length <= 10 ? title : title.slice(0, 10)}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <ul>
              {dropDownMenu.map((data, i) => (
                <li key={i} className="text-base text-white text-center">
                  <Link
                    to={`${data.path}`}
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
            <form>
              <button
                type="button"
                className="block w-full px-4 py-2 text-sm text-gray-700"
                onClick={async (e) => {
                  const res = await userSignOut(e, successToast, errorToast);
                  dispatch(logOut()), clearStorage("authToken"), navigate("/");
                }}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
