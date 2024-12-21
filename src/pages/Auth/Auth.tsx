import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import GoogleButton from "../../components/Auth/GoogleButton";
import Header from "../../components/Auth/Header";
import Or from "../../components/Auth/Or";
import axios from "axios";
import { notify } from "../../const/Notify";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
  setRole,
} from "../../store/Authen/authenSlice";
import jwtDecode from "../../utils/JwtDecode";
import { Spin } from "antd";

const Auth = () => {
  const pathImg = "../../assets/Background_LogSign.png";

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logInWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        // Lấy thông tin user từ Google
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          },
        );
        console.log("User Info:", userInfo.data);

        const data = {
          email: userInfo.data.email,
          firstName: userInfo.data.family_name,
          lastName: userInfo.data.given_name,
          username: userInfo.data.name,
          avatar: userInfo.data.picture,
          role: "CUSTOMER",
        };

        console.log(data);

        const res = await axios.post(
          "http://localhost:8080/api/v1/users/oauth/google",
          data,
        );
        console.log(res);

        if (!res.data || !res.data.accessToken) {
          notify("error", "Login failed. Please try again.");
        } else {
          notify("success", "Welcome to CAR4R");

          const { accessToken, refreshToken } = res.data;

          dispatch(setAccessToken(accessToken));
          dispatch(setRefreshToken(refreshToken));

          const role = await jwtDecode(accessToken);
          dispatch(setRole(role));

          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
        notify(
          "error",
          "Sign Up With Google Not Successfully. Please Try Again",
        );
      }
    },

    onError: () => {
      console.error("Google login failed");
      notify("error", "Google login failed. Please try again.");
      setLoading(false);
    },
  });

  return (
    <div className="flex flex-row flex-wrap w-full h-screen overflow-hidden">
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Header />

          <div className="w-1/2 h-full flex justify-center">
            <div className="w-3/4 flex flex-col items-center relative top-[11rem]">
              <h1 className="text-6xl font-bold text-center mb-5">
                Fast car rentals
                <br />
                smooth journeys!
              </h1>

              <GoogleButton
                txtVal="Continue With Google"
                handleClick={logInWithGoogle}
              />

              <Or classNameAdd="mt-12 mb-12" />

              <ButtonAuth
                txtVal="Sign Up With Email"
                classNameAdd="bg-white hover:bg-gray-500"
                handleClick={() => navigate("/signUp")}
              />

              <h1 className="text-center mt-6 text-sm text-wrap max-w-[28rem]">
                By signing up, you agree to the{" "}
                <span className="underline hover:cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline hover:cursor-pointer">
                  Privacy Policy
                </span>
                , including cookie use.
              </h1>
            </div>
          </div>

          <div className="w-1/2">
            <img className="w-full h-full" src={pathImg} />
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
