import React from "react";

const JobSkeleton = () => {
  return (
    <div>
      <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 h-screen">
        <div>
          <div className="bg-gray-200 h-6 w-48 rounded-md animate-pulse"></div>
        </div>
        <div className="flex justify-between border p-3 mt-2">
          <div className="space-y-2 w-full">
            <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
            <div className="bg-gray-200 h-8 w-64 rounded-md animate-pulse"></div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-6 w-6 rounded-full animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-20 rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-8 w-24 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-8 w-24 rounded-md animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
            <div className="bg-gray-200 h-8 w-64 rounded-md animate-pulse"></div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-6 w-6 rounded-full animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-20 rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-8 w-24 rounded-md animate-pulse"></div>
              <div className="bg-gray-200 h-8 w-24 rounded-md animate-pulse"></div>
            </div>
          </div>
          <div className="pt-5 md:pr-[5em] text-center">
            <div className="bg-gray-200 h-20 w-20 rounded-full animate-pulse mx-auto"></div>
            <div className="bg-gray-200 h-4 w-32 rounded-md animate-pulse mt-2 mx-auto"></div>
          </div>
        </div>
        <div className="space-y-3 mt-3">
          <div className="bg-gray-200 h-6 w-32 rounded-md animate-pulse"></div>
          <div className="bg-gray-200 h-4 w-full rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default JobSkeleton;
