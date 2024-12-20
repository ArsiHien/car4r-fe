import React, { useEffect, useState } from 'react';
import { Modal, Select, Button } from 'antd';
import axios from 'axios';
import { Car } from '../../types/Car';

interface CarSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (carId: string) => void;
  bookingId: string;
  carCategoryId: string;
}

const CarSelectionModal: React.FC<CarSelectionModalProps> = ({ visible, onClose, onSelect, bookingId, carCategoryId }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/cars/${carCategoryId}`);
        console.log('Expected an array of cars, but got:', response.data.cars);
        setCars(response.data.cars);
        console.log(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setCars([]); // Reset to empty array on error
      }
    };

    if (visible) {
      fetchCars();
    }
  }, [visible, carCategoryId]);

  const handleAssignCar = async () => {
    if (selectedCarId) {
      try {
        await axios.put(`http://localhost:8080/api/bookings/${bookingId}/assign-car/${selectedCarId}`);
        onSelect(selectedCarId);
        onClose();
      } catch (error) {
        console.error('Error assigning car:', error);
      }
    }
  };

  return (
    <Modal
      title="Select a Car"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="assign" type="primary" onClick={handleAssignCar}>
          Assign Car
        </Button>,
      ]}
    >
      <Select
        placeholder="Select a car"
        onChange={setSelectedCarId}
        style={{ width: '100%' }}
      >
        {cars.filter(car => car.status === "AVAILABLE" ).map(car => (
          <Select.Option key={car.id} value={car.id}>
            {car.licensePlate}
          </Select.Option>
        ))}
      </Select>
    </Modal>
  );
};

export default CarSelectionModal;