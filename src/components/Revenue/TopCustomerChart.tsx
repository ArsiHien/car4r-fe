import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

const TopCustomerChart: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [bookingCounts, setBookingCounts] = useState<number[]>([]);
  const [revenues, setRevenues] = useState<number[]>([]);

  useEffect(() => {
    const fetchTopCustomerRes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/management/customers/top"
        );
        const data = await response.data;
        const names = data.map((element: { name: string }) => element.name);
        const bookingCounts = data.map(
          (element: { bookingCount: number }) => element.bookingCount
        );
        const revenues = data.map(
          (element: { totalRevenue: number }) => element.totalRevenue
        );
        setNames(names);
        setBookingCounts(bookingCounts);
        setRevenues(revenues);
        console.log("fetch top customer done\n");
      } catch (error) {
        console.error("Error fetching top customer:", error);
      }
    };
    fetchTopCustomerRes();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: "text-center font-bold",
    },
    {
      title: "Bookings",
      dataIndex: "bookings",
      key: "bookings",
      align: "center" as const,
    },
    {
      title: "Spent",
      dataIndex: "spent",
      key: "spent",
      align: "center" as const,
      render: (text: number) => `$${text.toFixed(2)}`, // Format spent as currency
    },
  ];

  const data = names.map((name, index) => ({
    key: index,
    name,
    bookings: bookingCounts[index],
    spent: revenues[index],
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Top Customers</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="ant-table-custom rounded-md border border-gray-200"
      />
    </div>
  );
};

export default TopCustomerChart;
