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
  images: string[];
}

const cars: CarCardProps[] = [
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
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
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
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
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
  {
    carName: "All New Rush",
    carType: "SUV",
    carImg: car,
    fuel: 70,
    transmission: "Manual",
    capacity: 6,
    newPrice: 72.0,
    price: 80.0,
  },
];

export default cars;
