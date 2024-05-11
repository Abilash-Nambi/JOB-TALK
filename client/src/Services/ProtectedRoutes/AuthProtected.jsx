// import React from "react";
// import useLocalStorage from "../../Hooks/useLocalStorage";
// import useRouter from "../../Hooks/useRouter";
// import useToast from "../../Hooks/useToast";

// const AuthProtected = ({ children }) => {
//   const { getStorage } = useLocalStorage();
//   const { navigate } = useRouter();
//   const { warningToast } = useToast();

//   const token = getStorage("authToken");

//   if (token) {
//     return <div>{children}</div>;
//   } else {
//     warningToast("Please login");
//     navigate("/");
//   }
// };

// export default AuthProtected;

import React, { useEffect } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useRouter from "../../Hooks/useRouter";
import useToast from "../../Hooks/useToast";

const AuthProtected = ({ children }) => {
  const { getStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const { warningToast } = useToast();

  useEffect(() => {
    const token = getStorage("authToken");

    if (!token) {
      warningToast("Please login");
      navigate("/");
    }
  }, [getStorage, navigate, warningToast]);

  return <div>{children}</div>;
};

export default AuthProtected;
