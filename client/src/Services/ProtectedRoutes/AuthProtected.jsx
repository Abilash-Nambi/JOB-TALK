import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useRouter from "../../hooks/useRouter";
import useToast from "../../hooks/useToast";

const AuthProtected = ({ children }) => {
  const { getStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const { warningToast } = useToast();

  useEffect(() => {
    const token = getStorage("authToken");

    if (!token) {
      warningToast("Please login");
      navigate("/all-jobs");
    }
  }, [getStorage, navigate, warningToast]);

  return <div>{children}</div>;
};

export default AuthProtected;
