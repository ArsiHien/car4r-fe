import RevenueChart from "./RevenueChart";
import VisitorChart from "./VistorChart";

const RevenueDetail = () => {
    
    return (
        <>
        <div className="flex">
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Total Revenue</label>
                <br />
                <h2 className="inline-flex">
                    <p id="totalRev">3333</p>
                    $
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Today Revenue</label>
                <br />
                <h2 className="inline-flex">
                    <p id="todayRev">3333</p>
                    $
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Total Car</label>
                <br />
                <h2 className="inline-flex">
                    <p id="totalCar">334</p>
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Car Rented</label>
                <br />
                <h2 className="inline-flex">
                    <p id="rentedCar">33</p>
                </h2>
            </span>
            <span className="w-1/6 h-26 rounded-lg bg-white p-6 shadow-md m-3">
                <label className="text-xs text-left align-top text-slate-600">Car Available</label>
                <br />
                <h2 className="inline-flex">
                    <p id="unusedCar">322</p>
                </h2>
            </span>
        </div>
        <div>
            <div className="min-w-full max-h-screen inline-flex">
                <div className="w-2/3 rounded-lg bg-white p-6 shadow-md m-3">
                    <h2>Revenue</h2>
                    <RevenueChart />
                </div>
                    
                <div className="rounded-lg bg-white p-6 shadow-md m-3">
                    <h2>User Visits</h2>
                    <VisitorChart />   
                </div>
            </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md m-3">
                <h2>Top car rent</h2>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>Car</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Toyota</td>
                            <td>Car</td>
                            <td>3</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <td>Toyota</td>
                            <td>Car</td>
                            <td>3</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <td>Toyota</td>
                            <td>Car</td>
                            <td>3</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <td>Toyota</td>
                            <td>Car</td>
                            <td>3</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <td>Toyota</td>
                            <td>Car</td>
                            <td>3</td>
                            <td>1000$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RevenueDetail;