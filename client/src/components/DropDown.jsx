import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { userSignOut } from "../Services/authServices";
import useToast from "../Hooks/useToast";

function DropDown({ title, dropDownMenu, avatar, avatarTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const { successToast, errorToast, warningToast } = useToast();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
      >
        {avatar === "true" && <Avatar title={avatarTitle} />} {title}
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
            <form
              onSubmit={(e) => {
                userSignOut(e, successToast, errorToast);
              }}
            >
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm text-gray-700"
              >
                Sign out
              </button>
            </form>

            <ul>
              {dropDownMenu.map((data, i) => (
                <li key={i} className="text-base text-white ">
                  <Link
                    to={`${data.path}`}
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
