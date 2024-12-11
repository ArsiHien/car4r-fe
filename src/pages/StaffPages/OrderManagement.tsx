import carIcon from "../../assets/carIcon.png";
import order from "../../assets/order.png";
import overview from "../../assets/overview.png";

const orders = [
  {
    status: "Da hoan thanh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
    name: "Toyota Corolla",
    date: "5 ngay",
    fee: "5.000.000 VND",
    bill: "25.000.000 VND",
    start: "1/1/1111",
  },
  {
    status: "Da hoan thanh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1920px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
    name: "Toyota Corolla",
    date: "5 ngay",
    fee: "5.000.000 VND",
    bill: "25.000.000 VND",
    start: "1/1/1111",
  },
];
const OrderManagement = () => {
  return (
    <div className="flex gap-5 bg-gray-300">
      {/**left container */}

      <div className="w-1/5 flex flex-col ml-2 my-5 gap-2 ">
        {/**overview */}

        <button className="py-1 px-3 mx-3 flex gap-2 h-10 text-white bg-blue-600 text-xl hover:bg-blue-900 rounded focus:outline-none">
          <img src={overview} alt="overview" className="w-5 h-5 my-1" />
          <label className="text-white">Overview </label>
        </button>
        {/**car */}
        <button className="py-1 px-3 mx-3 flex gap-2 h-10 text-white bg-blue-600 text-xl hover:bg-blue-900 rounded focus:outline-none">
          <img src={carIcon} alt="overview" className="w-5 h-5 my-1" />
          <label className="text-white">Car </label>
        </button>
        {/**order */}
        <button className="py-1 px-3 mx-3 flex gap-2 h-10 text-white bg-blue-600 text-xl hover:bg-blue-900 rounded focus:outline-none">
          <img src={order} alt="overview" className="w-5 h-5 my-1" />
          <label className="text-white">Order </label>
        </button>
      </div>

      {/**right container */}
      <div className="w-4/5 flex flex-col gap-5 mr-5 py-5">
        {orders.map((order, index) => (
          <div key={index} className="bg-white py-2">
            {/**top section */}
            <div className="text-xl font-bold text-blue-600 pb-3 text-right px-5">
              {order.status}
            </div>
            <hr className="pb-5" />
            {/**middle section */}
            <div className="flex px-5 pb-3">
              <img src={order.image} alt="car image" className="w-40" />
              <div className="flex-grow">
                <div className="flex flex-col gap-1 mx-3">
                  <p className="text-2xl text-blue-900 font-bold">
                    {order.name}
                  </p>
                  <p className="text-sm font-bold">{order.fee}</p>
                  <p className="text-sm font-bold">{order.date}</p>
                </div>
              </div>
              <div className="flex">
                <p className="pr-5">Thanh tien:</p>
                <p className="text-2xl font-bold">{order.bill}</p>
              </div>
            </div>
            <hr className="" />
            {/**bottom section */}
            <div className="flex gap-20 mt-2">
              <div className="flex flex-grow text-sm mx-5">
                <p>Thoi gian dat:</p>
                <p className="mx-1">{order.start}</p>
              </div>
              <div className="flex gap-2 mx-5">
                <button className="border-2 py-1 px-3 w-40 h-10 text-white bg-blue-300 hover:bg-blue-600 focus:outline-none">
                  Thong tin chi tiet
                </button>
                <button className="w-auto border-2 py-1 px-3 w-40 h-10 bg-gray-300 hover:bg-gray-600 focus:outline-none">
                  Lien he khach hang
                </button>
                <button className="border-2 py-1 px-3 w-40 h-10 hover:bg-gray-300 focus:outline-none">
                  Huy don dat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
