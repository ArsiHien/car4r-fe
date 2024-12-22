import { useLocation } from "react-router-dom";
import EditCarForm from "../../components/AddCar/EditCarForm";

const EditCar = () => {
  const location = useLocation();
  const carCategory = location.state?.carCategory;
  console.log("cate: ", carCategory);

  return (
    <>
      <EditCarForm carCategory={carCategory}></EditCarForm>
    </>
  );
};

export default EditCar;
