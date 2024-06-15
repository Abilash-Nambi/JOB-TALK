import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useRouter from "../../hooks/useRouter";
import useToast from "../../hooks/useToast";

const AdminProtected = () => {
  const { getStorage } = useLocalStorage();
  const { navigate } = useRouter();
  const { warningToast } = useToast();
  useEffect(() => {
    const user = getStorage("user");
    const parsedDtata = JSON.parse(user);
    const role = parsedDtata?.role === "admin";

    const token = getStorage("authToken");

    if (!token && !role) {
      warningToast("Please login as admin");
      navigate("/auth/admin-login");
    }
  }, [getStorage, navigate, warningToast]);

  return <div>{children}</div>;
};

export default AdminProtected;
