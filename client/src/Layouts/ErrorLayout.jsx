import React from "react";

import { Outlet } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ErrorLayout;
