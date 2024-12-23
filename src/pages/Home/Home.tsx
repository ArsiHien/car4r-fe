import { DatePicker, Button } from "antd";
import CarListHorizontal from "../../components/Cars/CarListHorizontal";
import CarSectionHeader from "../../components/CarSectionHeader";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import User from "../../data/User";
import { setUser, clearUser } from "../../store/User/userSlice";
import Cookies from "js-cookie";

const Home = () => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = Cookies.get("user");

    const verifyTokenAndFetchUser = async () => {
      try {
        if (token && !storedUser) {
          const response = await axios.post(
            "http://localhost:8080/api/v1/users/verifyAccessToken",
            { token },
          );

          const user: User = response.data;
          dispatch(setUser(user));
        }
      } catch (error) {
        console.error("Error verifying token or fetching user data:", error);
        localStorage.removeItem("accessToken");
        dispatch(clearUser());
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
          src="\assets\bg-landingpage.png" // Replace with your actual image URL
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
                Location:

              </label>
              <div className="text-black font-bold">Hanoi</div>
            </div>

            {/* Date and Time Pickers */}
            <div className="flex items-center justify-between space-x-4 w-3/5">
              <div className="flex-1">
                <RangePicker
                  format="DD/MM/YYYY"
                  className="w-full text-2xl"
                  placeholder={["Start Date", "End Date"]}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Link to={routes.search}>
              <Button
                type="primary"
                className="bg-green-500 text-lg text-white py-2"
              >
                Search
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
