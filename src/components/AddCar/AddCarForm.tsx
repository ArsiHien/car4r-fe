import { useState } from 'react';
import { Car } from '../../data/cars';

const AddCarForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [carData, setCarData] = useState<Partial<Car>>({
    name: '',
    carType: '',
    capacity: 0,
    steering: '',
    gasoline: '',
    description: '',
    images: [],
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
      setCarData({ ...carData, images: [...images, ...newImages] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(carData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={carData.name}
              onChange={(e) => setCarData({ ...carData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Car Type</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={carData.carType}
              onChange={(e) => setCarData({ ...carData, carType: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Capacity</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={carData.capacity}
              onChange={(e) => setCarData({ ...carData, capacity: Number(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Steering</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={carData.steering}
              onChange={(e) => setCarData({ ...carData, steering: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gasoline</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={carData.gasoline}
              onChange={(e) => setCarData({ ...carData, gasoline: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={carData.description}
            onChange={(e) => setCarData({ ...carData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Images</label>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} alt="" className="w-full h-24 object-cover rounded-md" />
              </div>
            ))}
            <label className="border-2 border-dashed rounded-md h-24 flex items-center justify-center cursor-pointer">
              <span className="text-gray-500">Add Image</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;