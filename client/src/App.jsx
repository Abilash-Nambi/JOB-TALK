import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
