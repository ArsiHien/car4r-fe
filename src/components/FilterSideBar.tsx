import React, { useState } from "react";

interface FilterItem {
  type: string;
  amount: number;
}

interface FilterSidebarProps {
  carTypes: FilterItem[];
  capacities: FilterItem[];
}

export const FilterSideBar: React.FC<FilterSidebarProps> = ({
  carTypes,
  capacities,
}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleCapacityChange = (capacity: string) => {
    if (selectedCapacities.includes(capacity)) {
      setSelectedCapacities(selectedCapacities.filter((c) => c !== capacity));
    } else {
      setSelectedCapacities([...selectedCapacities, capacity]);
    }
  };

  return (
    <div className="fixed top-20 h-screen w-64 rounded-lg bg-white p-6">
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">TYPE</h3>
        {carTypes.map(({ type, amount }, index) => (
          <label key={index} className="mt-3 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            <span className="ml-2 text-[#596780]">{type}</span>
            <span className="ml-1 text-[#90A3BF]">({amount})</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">CAPACITY</h3>
        {capacities.map(({ type, amount }, index) => (
          <label key={index} className="mt-3 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600"
              checked={selectedCapacities.includes(type)}
              onChange={() => handleCapacityChange(type)}
            />
            <span className="ml-2 text-[#596780]">{type}</span>
            <span className="ml-1 text-[#90A3BF]">({amount})</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold text-[#90A3BF]">PRICE</h3>
        <div className="mt-3 pr-3">
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="slider w-full"
          />
          <div className="text-xl font-semibold text-[#596780]">
            Max. ${maxPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
