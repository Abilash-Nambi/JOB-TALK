import React from "react";
import image from "../Assets/images/subscribed.png";

const SubscribedPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <div className="bg-white p-8 rounded-lg  text-center">
          <div className="w-full  flex items-center justify-center">
            <img src={image} alt="" className="max-w-[30%]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-4">
              Already Subscribed
            </h1>
            <p className="text-blue-600">
              You are already subscribed to our service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribedPage;
