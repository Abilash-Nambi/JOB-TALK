import React from "react";
import logo from "../../../public/images/logo.png";
import { FaFacebookF, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FcCallback } from "react-icons/fc";
const Footer = () => {
  return (
    <div>
      {/* <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="w-20 h-20" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Job Talk™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer> */}
      <footer className="bg-[#f5f5f5] pb-5">
        <div className="flex md:flex-row justify-between px-20 mt-6 items-center flex-col  ">
          <div className="md:pl-12">
            <img src={logo} className="w-24" />
          </div>
          <div>
            <div className="flex md:flex-row flex-col gap-2 items-center rounded-lg">
              <span>Follow Us:</span>
              <ul className="flex flex-row gap-4">
                <li className=" p-2 rounded-2xl bg-white">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li className=" p-2 rounded-2xl bg-white">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className=" p-2 rounded-2xl bg-white">
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>

                <li className=" p-2 rounded-2xl bg-white">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className=" p-2 rounded-2xl bg-white">
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-rows-1 gap-8 px-20 ">
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-3">
                <span>
                  <FcCallback className="text-4xl" />
                </span>

                <div className="content">
                  <p>Need help? 24/7</p>
                  <h6 className="font-bold text-primary">
                    <a href="tel:0123456678">001-1234-88888</a>
                  </h6>
                </div>
              </div>
              <p className="text-sm text-primary/60">
                Job Searching Just Got Easy. Use Jobtex to run a hiring site and
                earn money in the process!
              </p>
              <div className="flex flex-row items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>{" "}
                101 E 129th St, East Chicago, IN 46312, US
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <ul className="space-y-1 items-start flex flex-col">
                <h6 className="text-primary font-bold">Quick Links</h6>
                <li>
                  <a href="">Job Packages</a>{" "}
                </li>
                <li>
                  <a href="">Post New Job</a>{" "}
                </li>
                <li>
                  <a href="">Jobs Listing</a>{" "}
                </li>
                <li>
                  <a href="">Jobs Style Grid</a>{" "}
                </li>
                <li>
                  <a href="">Employer Listing</a>{" "}
                </li>
                <li>
                  <a href="employers-grid-fullwidth.html">Employers Grid</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <ul className="space-y-1 items-start flex flex-col">
                <h6 className="text-primary font-bold">For Candidates</h6>
                <li>
                  <a href="">User Dashboard</a>{" "}
                </li>
                <li>
                  <a href="">CV Packages</a>{" "}
                </li>
                <li>
                  <a href="">Candidate Listing</a>{" "}
                </li>
                <li>
                  <a href="">Candidates Grid</a>{" "}
                </li>
                <li>
                  <a href="">About us</a>{" "}
                </li>
                <li>
                  <a href="">Contact us </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <ul className="space-y-1 items-start flex flex-col">
                <h6 className="text-primary font-bold">For Employers</h6>
                <li>
                  <a href="">Post New Job</a>{" "}
                </li>
                <li>
                  <a href="">Employer Listing</a>{" "}
                </li>
                <li>
                  <a href="">Employers Grid</a>{" "}
                </li>
                <li>
                  <a href="">Job Packages</a>{" "}
                </li>
                <li>
                  <a href="">Jobs Listing</a>{" "}
                </li>
                <li>
                  <a href="">Jobs Style Grid</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
