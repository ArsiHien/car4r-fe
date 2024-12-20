import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { CiSearch } from "react-icons/ci";
import cars from "../../data/cars";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../store/Filter/filterSlice";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCarCategoriesBasic } from "../../store/CarCategory/carCategoryActions";

const Title: React.FC<Readonly<{ title?: string }>> = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMoreClick = () => {
    if (title) {
      dispatch(setType(title));
      navigate("/search");
    }
  };

  return (
    <div className="flex items-center justify-between">
      {title}
      <button
        onClick={handleMoreClick}
        className="text-blue-500 text-sm focus:outline-none"
      >
        more
      </button>
    </div>
  );
};

interface AutoCompleteOption {
  label: React.ReactNode;
  options: {
    value: string;
    label: string;
    key: string;
  }[];
}

const SearchBar: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const carCategories = useSelector(
    (state: RootState) => state.carCategoryBasic.carCategories
  );

  useEffect(() => {
    if (!carCategories.length) dispatch(fetchCarCategoriesBasic());
  }, [carCategories.length, dispatch]);

  const handleSearch = (value: string) => {
    if (value.trim()) {
      const groupedOptions = carCategories
        .filter((car) => car.name.toLowerCase().includes(value.toLowerCase()))
        .reduce<{
          [type: string]: { value: string; label: string; key: string }[];
        }>((acc, car) => {
          const option = {
            value: car.name,
            label: `${car.name}`,
            key: `${car.id}`,
          };
          if (!acc[car.type]) {
            acc[car.type] = [];
          }
          acc[car.type].push(option);
          return acc;
        }, {});

      const optionsArray = Object.entries(groupedOptions).map(
        ([type, cars]) => ({
          label: <Title title={type} />,
          options: cars,
        })
      );

      setOptions(optionsArray);
    } else {
      setOptions([]);
    }
  };

  const handleSelect = (carName: string) => {
    const carId = carCategories.find((car) => car.name === carName)?.id;
    navigate(`/car/${carName}-${carId}`);
  };

  return (
    <>
      <AutoComplete
        options={options}
        onSearch={handleSearch}
        onSelect={handleSelect}
        className="w-full"
        popupMatchSelectWidth={500}
      >
        <input
          type="text"
          placeholder="Search something here"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300 placeholder:text-base"
        />
      </AutoComplete>
      <button className="absolute top-2 right-3 text-gray-500">
        <CiSearch className="size-6" />
      </button>
    </>
  );
};

export default SearchBar;
