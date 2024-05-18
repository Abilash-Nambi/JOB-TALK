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
const IntroSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto xl:px-24 px-4 bg-[#FAFAFA] mt-[4em]">
      <div className="py-[5em]">
        <div className="tf-container">
          <div className="grid md:grid-cols-2 grid-rows-1 gap-16">
            <div className="space-y-6">
              <div className="group-heading">
                <h4 className="text-4xl font-bold">
                  What can I do with Jobtex?
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
      <div class="tf-container">
        <div class="background1 wrap-count">
          <div class="row align-item-center">
            <div class="col-lg-3 col-md-6 wow fadeInUp">
              <div class="wd-counter widget-counter">
                <div class="inner wrap-counter">
                  <h2>
                    <span
                      class="counter-number"
                      data-speed="2000"
                      data-to="25"
                    ></span>
                    <span>M+</span>
                  </h2>
                </div>
                <p class="description">Jobs Available</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="wd-counter widget-counter">
                <div class="inner wrap-counter">
                  <h2>
                    <span
                      class="counter-number"
                      data-speed="2000"
                      data-to="177"
                    ></span>
                    <span>k+</span>
                  </h2>
                </div>
                <p class="description">New Jobs This Week!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="wd-counter widget-counter">
                <div class="inner wrap-counter">
                  <h2>
                    <span
                      class="counter-number"
                      data-speed="2000"
                      data-to="298"
                    ></span>
                    <span>k+</span>
                  </h2>
                </div>
                <p class="description">Companies Hiring</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="wd-counter widget-counter">
                <div class="inner wrap-counter">
                  <h2>
                    <span
                      class="counter-number"
                      data-speed="2000"
                      data-to="5"
                    ></span>
                    <span>M+</span>
                  </h2>
                </div>
                <p class="description">Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
