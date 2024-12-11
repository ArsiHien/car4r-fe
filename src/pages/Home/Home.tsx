import { DatePicker, Button } from "antd";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";
import CarSectionHeader from "../../components/CarSectionHeader";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const Home = () => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    console.log(token);
    const verifyTokenAndFetchUser = async () => {
      try {
        if (token) {
          const response = await axios.post(
            "http://localhost:8080/api/v1/users/verifyAccessToken",
            { token },
          );

          console.log(response);
        }
      } catch (error) {
        console.error("Error verifying token or fetching user data:", error);
        localStorage.removeItem("accessToken"); // Xóa token nếu không hợp lệ
      }
    };

    verifyTokenAndFetchUser();
    return () => {};
  }, []);

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="relative h-[70vh]">
        {" "}
        {/* Set the height to 50% of the viewport */}
        <img
          src="https://n1-cstg.mioto.vn/7/cho_thue_xe_tu_lai_hn/ha_noi/p/m/cities/HaNoi_cover.jpg" // Replace with your actual image URL
          alt="Hanoi City"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">Car Rental Website</h1>

          {/* Form Section */}
          <div className="absolute bottom-[-64px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Location */}
            <div className="flex flex-col items-start sm:w-1/4">
              <label className="text-gray-500 font-medium mb-1">
                Địa điểm:
              </label>
              <div className="text-black font-bold">Hà Nội</div>
            </div>

            {/* Date and Time Pickers */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="HH:mm, DD/MM/YYYY"
                  className="w-full text-2xl"
                  placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Link to={routes.search}>
              <Button
                type="primary"
                className="bg-green-500 text-lg text-white py-2"
              >
                Tìm Xe
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <CarSectionHeader title="Popular Car"></CarSectionHeader>
        <CarListHorizontal sliderId="popular-slider"></CarListHorizontal>
      </div>
      <div className="mt-8">
        <CarSectionHeader title="Recomendation Car"></CarSectionHeader>
        <CarListHorizontal sliderId="recomendation-slider"></CarListHorizontal>
      </div>
    </div>
  );
};

export default Home;
