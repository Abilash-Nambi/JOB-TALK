import React, { createContext, useContext, useState } from "react";

const categoryContext = createContext();

const useCategoryContext = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <categoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </categoryContext.Provider>
  );
};
export default useCategoryContext;

export const useCategory = () => {
  return useContext(categoryContext);
};
