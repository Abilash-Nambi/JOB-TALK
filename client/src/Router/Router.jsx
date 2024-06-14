import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/jobsPages/CreateJob";
import MyJobs from "../Pages/jobsPages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import { LogIn } from "../Pages/authPages/LogIn";
import SignUp from "../Pages/authPages/SignUp";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import PricingPage from "../Pages/PricingPage";
import ErrorLayout from "../Layouts/ErrorLayout";
import Error404 from "../Pages/Error404";
import JobPage from "../Pages/jobsPages/JobPage";
import AuthProtected from "../Services/ProtectedRoutes/AuthProtected";
import ApplicationForm from "../Pages/applications/ApplicationForm";
import MyApplication from "../Pages/applications/MyApplication";
//import Jobs from "../Pages/jobsPages/Jobs";
const Jobs = lazy(() => import("../Pages/jobsPages/Jobs"));
import EditJob from "../Pages/jobsPages/EditJob";
import ForgetPassword from "../Pages/authPages/ForgetPassword";

import { Loader } from "../components/CustomLoader";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashBoardAllJobs from "../Pages/DashBoard/DashBoardAllJobs";
import DashBoardInActiveJobs from "../Pages/DashBoard/DashBoardInActiveJobs";
import DashBoardActiveJobs from "../Pages/DashBoard/DashBoardActiveJobs";

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
        path: "post-job",
        element: <CreateJob />,
      },
      {
        path: "My-application",
        element: <MyApplication />,
      },
      {
        path: "my-job",
        element: <MyJobs />,
      },
      {
        path: "salary",
        element: <SalaryPage />,
      },
      {
        path: "all-jobs",
        element: (
          <Suspense fallback={<Loader />}>
            <Jobs />
          </Suspense>
        ),
      },
      {
        path: "job-application/:id",
        element: <ApplicationForm />,
      },
      {
        path: "edit-job/:id",
        element: <EditJob />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "job-details/:id",
        element: (
          <AuthProtected>
            <JobPage />
          </AuthProtected>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <LogIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorLayout />,
    children: [
      {
        path: "error404",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "home",
        element: <DashBoard />,
      },
      {
        path: "all-jobs",
        element: <DashBoardAllJobs />,
      },
      {
        path: "active",
        element: <DashBoardActiveJobs />,
      },
      {
        path: "in-active",
        element: <DashBoardInActiveJobs />,
      },
    ],
  },
]);

export default router;
