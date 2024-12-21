import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorChart: React.FC = () => {
    const [names, setNames] = useState<string[]>([]);
    const [bookingCounts, setBookingCounts] = useState<number[]>([]);
    const [revenues, setRevenues] = useState<number[]>([]);

    useEffect(() => {
        const fetchTopCustomerRes = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/management/customers/top");
                const data = await response.data;
                const names = data.map((element: { name: string }) => element.name);
                const bookingCounts = data.map((element: { bookingCount: number }) => element.bookingCount);
                const revenues = data.map((element: { totalRevenue: number }) => element.totalRevenue);
                setNames(names);
                setBookingCounts(bookingCounts);
                setRevenues(revenues);
                console.log("fetch top customer done\n");
            } catch (error) {
                console.error("Error fetching top customer:", error);
            }
        }
        fetchTopCustomerRes();
    }, []);

    return (
        <div className="rounded-lg bg-white p-6 shadow-md m-3">
            <h2>Top customer</h2>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Bookings</th>
                        <th>Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, index) => (
                        <tr key={index}>
                            <td className="text-center">{name}</td>
                            <td className="text-center">{bookingCounts[index]}</td>
                            <td className="text-center">{revenues[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisitorChart;