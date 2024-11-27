import config from "../config";
import { useNavigate } from "react-router-dom";

const CarSectionHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = config.routes.search;
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
