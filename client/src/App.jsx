import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import router from "./Router/Router";
import { useState } from "react";
import CustomLoader from "./components/CustomLoader";
function App() {
  const [loader, setLoader] = useState(false);
  const timeout = setTimeout(() => {
    setLoader(false);
    return () => clearTimeout(timeout);
  }, 3000);

  return (
    <>
      {loader ? (
        <CustomLoader />
      ) : (
        <>
          <ToastContainer />
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
