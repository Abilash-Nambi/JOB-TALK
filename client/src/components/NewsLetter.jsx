import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4 ">
          Subscribe to JobTalk to stay updated with the latest job opportunities
          tailored for you!
        </p>
        <div className="w-full space-y-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer font-semibold rounded-sm"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4 ">
          Get noticed faster by top employers—subscribe to JobTalk today!
        </p>
        <div className="w-full space-y-2">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full py-2 pl-3 border focus:outline-none bg-blue text-white cursor-pointer font-semibold rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
