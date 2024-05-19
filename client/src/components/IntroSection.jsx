import React from "react";
import map from "../Assets/images/map.png";
import user1 from "../Assets/images/user1.jpg";
import user2 from "../Assets/images/user2.jpg";
import user3 from "../Assets/images/user3.jpg";
import user4 from "../Assets/images/user4.jpg";
import user6 from "../Assets/images/user6.jpg";
import user7 from "../Assets/images/user7.jpg";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineGroups } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import Counter from "../components/Counter";

const IntroSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto xl:px-24 px-4 bg-[#FAFAFA] mt-[4em]">
      <div className="py-[5em]">
        <div className="tf-container">
          <div className="grid md:grid-cols-2 grid-rows-1 gap-16">
            <div className="space-y-6">
              <div className="group-heading">
                <h4 className="text-4xl font-bold">
                  What can I do with Jobtalk?
                </h4>
                <p className="text-primary/70 pt-3 text-[19px]">
                  Streamline your hiring process with strategic channels to{" "}
                  <br /> reach qualified candidates
                </p>
              </div>
              <div className=" relative">
                <img src={map} alt="" />
                <div className="">
                  <div className="absolute top-16 right-[10em] map-avatar">
                    <img src={user1} alt="images" />
                  </div>
                  <div className="absolute top-[10em] map-avatar right-[7em]">
                    <img src={user2} alt="images" />
                  </div>
                  <div className="absolute top-[10em] map-avatar left-[5rem]">
                    <img src={user3} alt="images" />
                  </div>
                  <div className="absolute top-[6rem] map-avatar">
                    <img src={user4} alt="images" />
                  </div>
                  <div className="absolute top-[15rem] map-avatar right-[17rem]">
                    <img src={user6} alt="images" />
                  </div>
                  <div className="absolute top-0 map-avatar left-[12rem]">
                    <img src={user7} alt="images" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="icon">
                  <TbUsersGroup className="text-5xl text-[#3575e2]" />
                </div>
                <div className="space-y-4">
                  <h6 className="text-[20px] font-bold ">
                    Access To Millions Of Candidates
                  </h6>
                  <p>
                    Reach 80M+ unique, diverse U.S. job seekers annually, when
                    you post your jobs through the large number of targeted
                    talent acquisition CareerBuilder channels.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="icon">
                  <MdOutlineGroups className="text-5xl text-[#3575e2]" />
                </div>
                <div className="space-y-4">
                  <h6 className="text-[20px] font-bold ">
                    Automate Candidate Engagement
                  </h6>
                  <p>
                    Use CareerBuilder's AI data to get exclusive insights into
                    your ideal candidate that can help you get the attention of
                    the top candidates.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="icon">
                  <TbTargetArrow className="text-5xl text-[#3575e2]" />
                </div>
                <div className="space-y-4">
                  <h6 className="text-[20px] font-bold ">
                    Boost Performance with an Outsourced Talent Acquisition Team
                  </h6>
                  <p>
                    Use our proven process to quickly drive the qualified,
                    targeted profiles into your sourcing pipeline and receive
                    qualified applicants in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="">
                  <FaArrowsDownToPeople className="text-5xl text-[#3575e2]" />
                </div>
                <div className="space-y-4">
                  <h6 className="text-[20px] font-bold ">
                    Pipeline Management on Your Terms
                  </h6>

                  <p>
                    Take full control of how you manage job postings, candidate
                    pools and outreach campaigns. Choose to use the
                    CareerBuilder platform or your own and utilize the analytics
                    and labor market data to build out your candidate pipelines
                    and pools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="grid md:grid-cols-4 grid-rows-1 gap-9  ">
          <div className="items-center flex flex-col">
            <div className="">
              <h2>
                <span className="text-5xl flex ">
                  <Counter id={"counter-job"} end={25} /> M+
                </span>
              </h2>
            </div>
            <p className="description">Jobs Available</p>
          </div>

          <div className="items-center flex flex-col">
            <div className="">
              <h2>
                <span className="text-5xl flex ">
                  <Counter id={"counter-week"} end={177} /> k+
                </span>
              </h2>
            </div>
            <p className="">New Jobs This Week!</p>
          </div>

          <div className="items-center flex flex-col">
            <div className="">
              <h2>
                <span className="text-5xl  flex">
                  <Counter id={"counter-hiring"} end={295} /> k+
                </span>
              </h2>
            </div>
            <p className="">Companies Hiring</p>
          </div>

          <div className="items-center flex flex-col">
            <div className="">
              <h2>
                <span className="text-5xl flex">
                  <Counter id={"counter-cand"} end={5} /> M+
                </span>
              </h2>
            </div>
            <p className="">Candidates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
