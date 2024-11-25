import { useState } from "react";
import { Car } from "../../data/cars";
import { Header, Footer, StaffSidebar } from "../../components";
import carpng from "../../assets/car.png";

const CarDetails = () => {
  const [car, setCar] = useState<Car>({
    id: "1",
    name: "Sample Car",
    carType: "SUV",
    capacity: 5,
    steering: "Manual",
    gasoline: "Petrol",
    description: "Sample car description",
    images: [carpng],
  });

  return (
    <>
      <Header />
      <div className="flex w-full">
        <StaffSidebar />
        <div className="p-6 flex-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {car.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-full h-32 object-cover rounded-md"
                  />
                ))}
              </div>
              <button className="w-full py-2 border-2 border-dashed rounded-md text-gray-500">
                Add Image
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={car.name}
                  onChange={(e) => setCar({ ...car, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Car Type
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={car.carType}
                  onChange={(e) => setCar({ ...car, carType: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Capacity
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  value={car.capacity}
                  onChange={(e) =>
                    setCar({ ...car, capacity: Number(e.target.value) })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Steering
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={car.steering}
                  onChange={(e) => setCar({ ...car, steering: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gasoline
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={car.gasoline}
                  onChange={(e) => setCar({ ...car, gasoline: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  value={car.description}
                  onChange={(e) =>
                    setCar({ ...car, description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarDetails;
