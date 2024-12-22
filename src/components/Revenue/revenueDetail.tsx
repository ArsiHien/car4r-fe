import axios from "axios";
import RevenueChart from "./RevenueChart";
import TopCustomerChart from "./TopCustomerChart";
import RevenueByCarCateChart from "./RevenueByCarCateChart";
import { useEffect, useState } from "react";
import RatingChart from "./RatingChart";
import { DollarOutlined, CarOutlined, UserOutlined } from "@ant-design/icons";
import { Table } from "antd";

const RevenueDetail = () => {
  const [totalRev, setTotalRev] = useState<number>(0);
  const [totalCar, setTotalCar] = useState<number>(0);
  const [rentedCar, setRentedCar] = useState<number>(0);
  const [unusedCar, setUnusedCar] = useState<number>(0);
  const [numberOfCustomer, setNumberOfCustomer] = useState<number>(0);
  const [carNames, setCarNames] = useState<string[]>([]);
  const [carTypes, setCarTypes] = useState<string[]>([]);
  const [carQuantities, setCarQuantities] = useState<number[]>([]);
  const [carAmounts, setCarAmounts] = useState<number[]>([]);
  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/management/revenue/overview"
        );
        const data = response.data;
        setTotalRev(data.totalRevenue);
        setTotalCar(data.totalCar);
        setRentedCar(data.rentedCar);
        setUnusedCar(data.availableCar);
        setNumberOfCustomer(data.numberOfCustomer);
        console.log("fetch revenue done\n");
      } catch (error) {
        console.error("Error fetching revenue:", error);
      }
    };

    const fetchMostRentedCar = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/management/car-categories/most-rented"
        );
        const data = response.data;
        const names = data.map((element: { name: string }) => element.name);
        const types = data.map((element: { type: string }) => element.type);
        const quantities = data.map(
          (element: { numberOfPerson: number }) => element.numberOfPerson
        );
        const amounts = data.map((element: { price: number }) => element.price);
        setCarNames(names);
        setCarTypes(types);
        setCarQuantities(quantities);
        setCarAmounts(amounts);
      } catch (error) {
        console.error("Error fetching revenue:", error);
      }
    };

    fetchRevenue();
    fetchMostRentedCar();
  }, []);

  const data = carNames.map((name, index) => ({
    key: index,
    car: name,
    type: carTypes[index],
    quantity: carQuantities[index],
    price: carAmounts[index],
  }));

  const columns = [
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
      className: "text-center font-bold",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center" as const,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center" as const,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center" as const,
      render: (text: number) => `$${text.toFixed(2)}`,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-11">
        <span className="col-span-3 rounded-lg bg-gradient-to-r from-blue-300 to-blue-200 p-6 shadow-md m-3 flex justify-between items-center">
          <div>
            <label className="text-2xl font-semibold text-left align-top text-slate-600">
              Total Revenue
            </label>
            <br />
            <h2 className="inline-flex text-slate-700 font-semibold">
              <p id="totalRev">{totalRev}</p>$
            </h2>
          </div>
          <span className="text-5xl text-orange-500">
            <DollarOutlined />
          </span>
        </span>
        <span className="col-span-3 rounded-lg bg-gradient-to-r from-emerald-200 to-emerald-300 p-6 shadow-md m-3 flex justify-between items-center">
          <div>
            <label className="text-2xl font-semibold text-left align-top text-slate-600">
              Customer
            </label>
            <br />
            <h2 className="inline-flex text-slate-700 font-semibold">
              <p id="numberOfCustomer">{numberOfCustomer}</p>
            </h2>
          </div>
          <span className="text-5xl text-green-500">
            <UserOutlined />
          </span>
        </span>
        <span className="col-span-3 rounded-lg bg-gradient-to-r from-orange-300 to-orange-400 p-6 shadow-md m-3 flex justify-between items-center">
          <div>
            <label className="text-2xl font-semibold text-left align-top text-slate-600">
              Total Car
            </label>
            <br />
            <h2 className="inline-flex text-slate-700 font-semibold">
              <p id="totalCar">{totalCar}</p>
            </h2>
          </div>
          <span className="text-5xl text-yellow-100">
            <CarOutlined />
          </span>
        </span>
        <div className="col-span-2 rounded-lg bg-white px-6 py-2 shadow-md m-3">
          <RatingChart />
        </div>
      </div>
      <div className="grid grid-cols-7 min-w-full max-h-screen ">
        <div className="col-span-4 rounded-lg bg-white p-6 shadow-md m-3">
          <RevenueChart />
        </div>

        <div className="col-span-3 rounded-lg bg-white p-6 shadow-md m-3">
          <RevenueByCarCateChart />
        </div>
      </div>
      <div className="flex justify-between align-top gap-5 mt-5 ml-3">
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Top Car Rents</h2>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="ant-table-custom rounded-md border border-gray-200"
          />
        </div>
        <div className="w-1/2">
          <TopCustomerChart />
        </div>
      </div>
    </>
  );
};

export default RevenueDetail;
