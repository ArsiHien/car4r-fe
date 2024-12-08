import { CarCardProps } from "../components/Cars/CarCard";
import car from "../assets/Car.png";

export interface Car {
  id: string;
  name: string;
  carType: string;
  numberOfPerson: number;
  steering: string;
  gasoline: number;
  description: string;
  mainImages: string[];
  images: string[];
}

const cars: CarCardProps[] = [
  {
    name: "ABc",
    type: "SUV",
    mainImage: car, // Assuming `car` is defined elsewhere
    gasoline: 70,
    steering: "Manual",
    numberOfPerson: 6,
    promotionPrice: 72.0,
    price: 80.0,
  },
  {
    name: "Lmao",
    type: "SUV",
    mainImage: car,
    gasoline: 70,
    steering: "Manual",
    numberOfPerson: 6,
    promotionPrice: null,
    price: 80.0,
  },
  {
    name: "All New Rush",
    type: "SUV",
    mainImage: car,
    gasoline: 70,
    steering: "Manual",
    numberOfPerson: 7,
    promotionPrice: 40.0,
    price: 90.0,
  },
  {
    name: "All New Rush",
    type: "SUV",
    mainImage: car,
    gasoline: 70,
    steering: "Manual",
    numberOfPerson: 5,
    promotionPrice: 20.0,
    price: 85.0,
  },
  {
    name: "Tesla Model X",
    type: "SUV",
    mainImage: car,
    gasoline: 80,
    steering: "Automatic",
    numberOfPerson: 6,
    promotionPrice: 50,
    price: 100.0,
  },
  {
    name: "Tesla Model Y",
    type: "SUV",
    mainImage: car,
    gasoline: 80,
    steering: "Automatic",
    numberOfPerson: 5,
    promotionPrice: 92.0,
    price: 98.0,
  },
  {
    name: "Honda Civic",
    type: "Sedan",
    mainImage: car,
    gasoline: 60,
    steering: "Manual",
    numberOfPerson: 5,
    promotionPrice: 60.0,
    price: 65.0,
  },
  {
    name: "Honda Accord",
    type: "Sedan",
    mainImage: car,
    gasoline: 65,
    steering: "Manual",
    numberOfPerson: 5,
    promotionPrice: 70.0,
    price: 75.0,
  },
  {
    name: "Ford Mustang",
    type: "Coupe",
    mainImage: car,
    gasoline: 65,
    steering: "Manual",
    numberOfPerson: 4,
    promotionPrice: 90.0,
    price: 95.0,
  },
  {
    name: "Chevrolet Camaro",
    type: "Coupe",
    mainImage: car,
    gasoline: 75,
    steering: "Manual",
    numberOfPerson: 4,
    promotionPrice: 80.0,
    price: 85.0,
  },
  {
    name: "Nissan Altima",
    type: "Sedan",
    mainImage: car,
    gasoline: 60,
    steering: "Automatic",
    numberOfPerson: 5,
    promotionPrice: 85.0,
    price: 90.0,
  },
  {
    name: "BMW X5",
    type: "SUV",
    mainImage: car,
    gasoline: 80,
    steering: "Automatic",
    numberOfPerson: 7,
    promotionPrice: 100.0,
    price: 110.0,
  },
];

export default cars;
