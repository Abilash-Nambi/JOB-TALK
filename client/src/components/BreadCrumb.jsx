import React from "react";

const BreadCrumb = ({ title, path }) => {
  return (
    <div>
      <div class="flex justify-center items-center py-24 mt-3 bg-gray-100 rounded">
        <div>
          <h2 className="text-3xl text-blue font-medium mb-1 text-center">
            {title}
          </h2>
          <p className="text-sm text-center ">
            <a href="/"> Home/{path}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
