import { useDispatch, useSelector } from "react-redux";
import {
  toggleType,
  toggleCapacity,
  setMaxPrice,
} from "../../store/Filter/filterSlice";
import { RootState } from "../../store/store";
import { capacityData, carTypesData } from "../../data/sidebarProps";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const handleTypeChange = (type: string) => {
    dispatch(toggleType(type));
  };

  const handleCapacityChange = (capacity: string) => {
    dispatch(toggleCapacity(capacity));
  };

  const handlePriceChange = (price: number) => {
    dispatch(setMaxPrice(price));
  };

  return (
    <div className="fixed top-20 h-screen w-64 rounded-lg bg-white p-6">
      {/* Type Filter */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">TYPE</h3>
        {carTypesData.map(({ type, amount }, index) => (
          <label key={index} className="mt-3 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
              checked={filters.types.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            <span className="ml-2 text-[#596780]">{type}</span>
            <span className="ml-1 text-[#90A3BF]">({amount})</span>
          </label>
        ))}
      </div>

      {/* Capacity Filter */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">CAPACITY</h3>
        {capacityData.map(({ type, amount }, index) => (
          <label key={index} className="mt-3 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
              checked={filters.capacities.includes(type)}
              onChange={() => handleCapacityChange(type)}
            />
            <span className="ml-2 text-[#596780]">{type}</span>
            <span className="ml-1 text-[#90A3BF]">({amount})</span>
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">PRICE</h3>
        <div className="mt-3 pr-3">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="slider w-full"
          />
          <div className="text-xl font-semibold text-[#596780]">
            Max. ${filters.maxPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
