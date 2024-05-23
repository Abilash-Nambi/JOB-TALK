import React from "react";
import Banner from "../components/Home/Banner";
import { useState } from "react";
import Category from "../components/Home/Category";
import IntroSection from "../components/Home/IntroSection";
import useScrollToTop from "../Hooks/useScrollToTop";
import { useEffect } from "react";

const Home = () => {
  const [query, setQuerry] = useState("");

  useEffect(() => {
    useScrollToTop();
  }, []);

  const handleInputChange = (e) => {
    setQuerry((prev) => e.target.value);
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <Category />
      <IntroSection />
    </div>
  );
};

export default Home;
