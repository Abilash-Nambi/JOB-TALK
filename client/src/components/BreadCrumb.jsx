import React from "react";
import useRouter from "../Hooks/useRouter";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  const { location } = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center py-24 mt-3 bg-gray-100 rounded">
        <div>
          <h2 className="text-3xl text-blue font-medium mb-1 text-center">
            {title}
          </h2>
          <p className="text-sm text-center ">
            <span>
              <Link to="/">Home </Link>
              {location.pathname}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
