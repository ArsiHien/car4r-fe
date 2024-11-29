import React, { useState } from "react";
import { AutoComplete } from "antd";
import { CiSearch } from "react-icons/ci";
import cars from "../../data/cars";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../store/Filter/filterSlice";

const Title: React.FC<
  Readonly<{ title?: string; closeDropdown: () => void }>
> = ({ title, closeDropdown }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMoreClick = () => {
    if (title) {
      dispatch(setType(title));
      closeDropdown();
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
  const [open, setOpen] = useState(false);

  const handleSearch = (value: string) => {
    if (value.trim()) {
      const groupedOptions = cars
        .filter((car) =>
          car.carName.toLowerCase().includes(value.toLowerCase())
        )
        .reduce<{
          [type: string]: { value: string; label: string; key: string }[];
        }>((acc, car) => {
          const option = {
            value: car.carName,
            label: `${car.carName}`,
            key: `${car.carName}-${car.capacity}-${car.carType}`,
          };
          if (!acc[car.carType]) {
            acc[car.carType] = [];
          }
          acc[car.carType].push(option);
          return acc;
        }, {});

      const optionsArray = Object.entries(groupedOptions).map(
        ([type, cars]) => ({
          label: <Title title={type} closeDropdown={() => setOpen(false)} />,
          options: cars,
        })
      );

      setOptions(optionsArray);
      setOpen(true);
    } else {
      setOptions([]);
      setOpen(false);
    }
  };

  const navigate = useNavigate();
  const handleSelect = (carName: string) => {
    console.log("Selected car:", carName);
    navigate(`/car/${carName}`);
    setOpen(false);
  };

  return (
    <>
      <AutoComplete
        open={open}
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
          onFocus={() => setOpen(true)}
        />
      </AutoComplete>
      <button className="absolute top-2 right-3 text-gray-500">
        <CiSearch className="size-6" />
      </button>
    </>
  );
};

export default SearchBar;
