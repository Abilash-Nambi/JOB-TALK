import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/jobs/CreateJob";
import MyJobs from "../Pages/jobs/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import { LogIn } from "../Pages/authPages/LogIn";
import SignUp from "../Pages/authPages/SignUp";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import PricingPage from "../Pages/PricingPage";
import ErrorLayout from "../Layouts/ErrorLayout";
import Error404 from "../Pages/Error404";
import JobPage from "../Pages/jobs/JobPage";
import AuthProtected from "../Services/ProtectedRoutes/AuthProtected";
import ApplicationForm from "../Pages/applications/ApplicationForm";
import MyApplication from "../Pages/applications/MyApplication";
import Jobs from "../Pages/jobs/Jobs";
import EditJob from "../Pages/jobs/EditJob";
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
        element: <Jobs />,
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
      // {
      //   path: "/recruiter/pricing-page",
      //   element: <PricingPage />,
      // },
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
]);

export default router;
