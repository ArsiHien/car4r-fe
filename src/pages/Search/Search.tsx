import FilterSideBar from "../../components/FilterSideBar";
import { capacityData, carTypesData } from "../../data/sidebarProps";
import CarList from "../../components/CarList";

const Search = () => {
  return (
    <>
      <FilterSideBar
        carTypes={carTypesData}
        capacities={capacityData}
      ></FilterSideBar>
      <CarList></CarList>
    </>
  );
};

export default Search;
