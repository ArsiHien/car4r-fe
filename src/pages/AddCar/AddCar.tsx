import CarForm from "../../components/AddCar/AddCarForm";

const AddCarPage = () => {
  return (
    <>
      <div className="flex-1 ">
        <CarForm isEditMode={false} />
      </div>
    </>
  );
};

export default AddCarPage;