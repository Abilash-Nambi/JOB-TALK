import React from "react";

const CardSkeleton = () => {
  return (
    <div>
      <section className="card  delay-150 animate-pulse">
        <div className="flex gap-4 flex-col sm:flex-row items-start">
          <div className="w-20 h-20 bg-gray-300"></div>
          <div>
            <h4 className="text-blue mb-1 capitalize bg-gray-200 h-4 w-11 md:w-[34em]"></h4>
            <h3 className="text-lg font-bold mb-2 text-primary bg-gray-200 h-6 w-48"></h3>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="flex items-center gap-2 bg-gray-200 h-4 w-24"></span>
              <span className="flex items-center gap-2 bg-gray-200 h-4 w-20"></span>
              <span className="flex items-center gap-2 bg-gray-200 h-4 w-28"></span>
              <span className="flex items-center gap-2 bg-gray-200 h-4 w-20"></span>
            </div>
            <p className="text-base line-clamp-2 text-primary/70 bg-gray-200 h-12 w-full mb-2"></p>
            <a href="/job-details/1" className="justify-end flex">
              <button className="bg-gray-200  px-2 py-1 text-xs flex gap-2 items-center mt-2 rounded-sm hover:bg-[#172554] h-8 w-24"></button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSkeleton;
