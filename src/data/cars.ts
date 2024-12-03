import { CarCardProps } from "../components/Cars/CarCard";
import car from "../assets/Car.png";

export interface Car {
  id: string;
  name: string;
  carType: string;
  capacity: number;
  steering: string;
  gasoline: string;
  description: string;
  mainImages: string[];
  images: string[];
}

const cars: CarCardProps[] = [
  {
    carName: "ABc",
    carType: "SUV",
    carImg: car, // Assuming `car` is defined elsewhere
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "Lmao",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: null,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 7,
    newPrice: 40.0,
    price: 90.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 5,
    newPrice: 20.0,
    price: 85.0,
  },
  {
    carName: "Tesla Model X",
    carType: "SUV",
    carImg: car,
    fuel: 80,
    transmission: "Automatic",
    capacity: 6,
    newPrice: 50,
    price: 100.0,
  },
  {
    carName: "Tesla Model Y",
    carType: "SUV",
    carImg: car,
    fuel: 80,
    transmission: "Automatic",
    capacity: 5,
    newPrice: 92.0,
    price: 98.0,
  },
  {
    carName: "Honda Civic",
    carType: "Sedan",
    carImg: car,
    fuel: 60,
    transmission: "Manual",
    capacity: 5,
    newPrice: 60.0,
    price: 65.0,
  },
  {
    carName: "Honda Accord",
    carType: "Sedan",
    carImg: car,
    fuel: 65,
    transmission: "Manual",
    capacity: 5,
    newPrice: 70.0,
    price: 75.0,
  },
  {
    carName: "Ford Mustang",
    carType: "Coupe",
    carImg: car,
    fuel: 65,
    transmission: "Manual",
    capacity: 4,
    newPrice: 90.0,
    price: 95.0,
  },
  {
    carName: "Chevrolet Camaro",
    carType: "Coupe",
    carImg: car,
    fuel: 75,
    transmission: "Manual",
    capacity: 4,
    newPrice: 80.0,
    price: 85.0,
  },
  {
    carName: "Nissan Altima",
    carType: "Sedan",
    carImg: car,
    fuel: 60,
    transmission: "Automatic",
    capacity: 5,
    newPrice: 85.0,
    price: 90.0,
  },
  {
    carName: "BMW X5",
    carType: "SUV",
    carImg: car,
    fuel: 80,
    transmission: "Automatic",
    capacity: 7,
    newPrice: 100.0,
    price: 110.0,
  },
];

export default cars;
