import { useNavigate, useLocation, useParams } from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return {
    navigate,
    location,
    params,
    goBack: () => navigate(-1),
  };
};
export default useRouter;
