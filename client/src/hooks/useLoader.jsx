// hooks/useLoader.js
import { useState } from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log("🚀 + useLoader + isLoading:", isLoading);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return {
    isLoading,
    showLoader,
    hideLoader,
  };
};

export default useLoader;
