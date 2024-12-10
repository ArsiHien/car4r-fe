import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard";
import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCarCategories } from "../../store/CarCategory/carCategoryActions";

const CarsManagement = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { carCategories, loading, error } = useSelector(
    (state: RootState) => state.carCategory
  );

  useEffect(() => {
    dispatch(fetchCarCategories());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      setExpandedCardId(null); // Reset expanded card when loading
    } 
  }, [loading]);

  const handleToggle = (id: string) => {
    if (loading) {
      setExpandedCardId(null); // Reset expanded card when loading
    } else {
      setExpandedCardId(expandedCardId === id ? null : id); // Toggle the expanded state
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Cars</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          <Link
            to={
              location.pathname.startsWith(routes.manager.cars)
                ? routes.manager.addCar
                : routes.staff.addCar
            }
          >
            Add Car Category
          </Link>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
      {carCategories.map((category) => (
          <CarCard
            key={category.id}
            carCategory={category}
            isExpanded={expandedCardId === category.id} // Check if this card is expanded
            onToggle={() => handleToggle(category.id)} // Pass the toggle function 
            />
          ))}
      </div>
    </>
  );
};

export default CarsManagement;
