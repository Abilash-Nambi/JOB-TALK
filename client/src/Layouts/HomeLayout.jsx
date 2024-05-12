import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
