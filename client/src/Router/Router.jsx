import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import { LogIn } from "../Pages/authPages/LogIn";
import SignUp from "../Pages/authPages/SignUp";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import PricingPage from "../Pages/PricingPage";
import ErrorLayout from "../Layouts/ErrorLayout";
import Error404 from "../Pages/Error404";
import JobPage from "../Pages/JobPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "/job-details",
        element: <JobPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <LogIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/recruiter/pricing-page",
        element: <PricingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ErrorLayout />,
    children: [
      {
        path: "/error404",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
