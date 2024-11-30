import { useDispatch } from "react-redux";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { resetFilters } from "../store/Filter/filterSlice";

const CarSectionHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routeChange = () => {
    const path = config.routes.search;
    dispatch(resetFilters());
    navigate(path);
  };
  return (
    <div className="flex justify-between">
      <h1 className="font-semibold text-[#90A3BF] text-base">{title}</h1>
      <button
        className="font-semibold text-[#3563E9] text-base"
        onClick={routeChange}
      >
        View all
      </button>
    </div>
  );
};

export default CarSectionHeader;
