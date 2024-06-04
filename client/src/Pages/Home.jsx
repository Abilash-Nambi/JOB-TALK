import React from "react";
import Banner from "../components/Home/Banner";
import { useState } from "react";
import Category from "../components/Home/Category";
import IntroSection from "../components/Home/IntroSection";
import useScrollToTop from "../Hooks/useScrollToTop";
import { useEffect } from "react";
import { searchJob } from "../Services/api/JobEndPoints";

const Home = () => {
  const [query, setQuerry] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const res = await searchJob(query);
    console.log("🚀 + useEffect + res:", res);
    setData(res);
  };

  useEffect(() => {
    useScrollToTop();
  }, []);

  const handleInputChange = (e) => {
    setQuerry((prev) => e.target.value);
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} data={data} />
      <Category />
      <IntroSection />
    </div>
  );
};

export default Home;
