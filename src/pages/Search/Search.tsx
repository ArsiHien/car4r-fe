import FilterSideBar from "../../components/FilterSideBar";
import { capacityData, carTypesData } from "../../data/sidebarProps";
import CarList from "../../components/Cars/CarList";
import { SidebarLayout } from "../../layouts";

const Search = () => {
  return (
    <>
      <FilterSideBar carTypes={carTypesData} capacities={capacityData} />
      <CarList />
    </>
  );
};

export default Search;
