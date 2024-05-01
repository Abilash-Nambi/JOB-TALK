import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import { LogIn } from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import RecruiterSignUp from "../Pages/RecruiterSignUp";
import PricingPage from "../Pages/PricingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
        path: "/recruiter/sign-up",
        element: <RecruiterSignUp />,
      },
      {
        path: "/recruiter/pricing-page",
        element: <PricingPage />,
      },
    ],
  },
]);

export default router;
