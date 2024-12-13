import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../store/Authen/authenSlice";

// Hook custom để gọi dispatch
const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refreshToken = async () => {
    const refreshToken = Cookies.get("refreshToken");

    if (refreshToken != null) {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/users/refreshToken",
          {
            withCredentials: true,
          },
        );

        const accessToken = res.data.accessToken;
        if (accessToken != null) {
          dispatch(setAccessToken(accessToken)); // Dispatch action để lưu access token vào redux
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    }
  };

  return refreshToken;
};

export default useRefreshToken;
