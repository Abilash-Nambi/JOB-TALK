import React from "react";

function useLocalStorage() {
  const setStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  const getStorage = (key) => {
    localStorage.getItem(key);
  };
  const clearStorage = (key) => {
    localStorage.removeItem(key);
  };
  return { setStorage, getStorage, clearStorage };
}

export default useLocalStorage;
