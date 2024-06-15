import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useRouter from "../../hooks/useRouter";
import useToast from "../../hooks/useToast";

const AdminProtected = ({ children }) => {
  const { getStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const { warningToast } = useToast();
  useEffect(() => {
    const user = getStorage("user");
    const parsedDtata = JSON.parse(user);
    const role = parsedDtata?.role;
    console.log("🚀 + useEffect + role:", role);

    const token = getStorage("authToken");

    if (role !== "admin") {
      warningToast("Please login as admin");
      navigate("/auth/admin-login");
    }
  }, [getStorage, navigate, warningToast]);

  return <div>{children}</div>;
};

export default AdminProtected;
