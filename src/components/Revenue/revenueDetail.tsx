import axios from "axios";
import RevenueChart from "./RevenueChart";
import VisitorChart from "./VistorChart";
import { useEffect, useState } from "react";

const RevenueDetail = () => {
    const [totalRev, setTotalRev] = useState<number>(0);
    const [totalCar, setTotalCar] = useState<number>(0);
    const [rentedCar, setRentedCar] = useState<number>(0);
    const [unusedCar, setUnusedCar] = useState<number>(0);
    const [carNames, setCarNames] = useState<string[]>([]);
    const [carTypes, setCarTypes] = useState<string[]>([]);
    const [carQuantities, setCarQuantities] = useState<number[]>([]);
    const [carAmounts, setCarAmounts] = useState<number[]>([]);
    useEffect(() => {
        const fetchRevenue = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/management/revenue/overview");
                const data = response.data;
                    /**document.getElementById("totalRev")!.innerText = data.data.totalRevenue;
                    document.getElementById("totalCar")!.innerText = data.data.totalCar;
                    document.getElementById("rentedCar")!.innerText = data.data.rentedCar;
                    document.getElementById("unusedCar")!.innerText = data.data.availableCar;**/
                setTotalRev(data.totalRevenue);
                setTotalCar(data.totalCar);
                setRentedCar(data.rentedCar);
                setUnusedCar(data.availableCar);
                console.log("fetch revenue done\n");
            } catch (error) {
                console.error("Error fetching revenue:", error);
            }
        }

        const fetchMostRentedCar = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/management/car-categories/most-rented");
                const data = response.data;
                const names = data.map((element: { name: string }) => element.name);
                const types = data.map((element: { type: string }) => element.type);
                const quantities = data.map((element: { numberOfPerson: number }) => element.numberOfPerson);
                const amounts = data.map((element: { price: number }) => element.price);
                setCarNames(names);
                setCarTypes(types);
                setCarQuantities(quantities);
                setCarAmounts(amounts);
            } catch (error) {
                console.error("Error fetching revenue:", error);
            }
        }

        fetchRevenue();
        fetchMostRentedCar();
    }, []);


    return (
        <>
        <div className="flex">
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Total Revenue</label>
                <br />
                <h2 className="inline-flex">
                        <p id="totalRev">{totalRev}</p>
                    $
                </h2>
            </span>
            {/* <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Today Revenue</label>
                <br />
                <h2 className="inline-flex">
                    <p id="todayRev">ERROR</p>
                    $
                </h2>
            </span> */}
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Total Car</label>
                <br />
                <h2 className="inline-flex">
                        <p id="totalCar">{totalCar}</p>
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Car Rented</label>
                <br />
                <h2 className="inline-flex">
                        <p id="rentedCar">{rentedCar}</p>
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Car Available</label>
                <br />
                <h2 className="inline-flex">
                        <p id="unusedCar">{unusedCar}</p>
                </h2>
            </span>
        </div>
        <div>
            <div className="min-w-full max-h-screen inline-flex">
                <div className="w-2/3 rounded-lg bg-white p-6 shadow-md m-3">
                    <h2>Revenue</h2>
                    <RevenueChart />
                </div>
                    
                <VisitorChart />
            </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md m-3">
                <h2>Top car rent</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th>Car</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carNames.map((name, index) => (
                            <tr key={index}>
                                <td className="text-center">{name}</td>
                                <td className="text-center">{carTypes[index]}</td>
                                <td className="text-center">{carQuantities[index]}</td>
                                <td className="text-center">{carAmounts[index]}$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RevenueDetail;