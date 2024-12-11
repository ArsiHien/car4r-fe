import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import Form from "../../components/Auth/Form";
import GoogleButton from "../../components/Auth/GoogleButton";
import Or from "../../components/Auth/Or";
import { Avatar } from "../../components/Avatar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { notify } from "../../const/Notify";
import {
  setAccessToken,
  setEmail,
  setPassword,
  setRefreshToken,
  setRole,
} from "../../store/Authen/authenSlice";
import jwtDecode from "../../utils/JwtDecode";
import { useGoogleLogin } from "@react-oauth/google";
import Role from "../../const/Role";
import routes from "../../config/routes";
import { useState } from "react";
import { Spin } from "antd";

const Login = () => {
  // get state global
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password);

  const validateEmail = useSelector(
    (state: RootState) => state.auth.validateEmail,
  );

  const validatePw = useSelector(
    (state: RootState) => state.auth.validatePw.general,
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // logic
  // handle login
  const handleLogIn = async () => {
    setLoading(true);

    if (!validateEmail || !validatePw) {
      notify("error", "Not Validate Email Or Password. Please Try Again");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/users/login",
          {
            email: email,
            password: password,
          },
        );

        console.log(res);

        if (res.data.message === "FAIL") {
          notify("error", res.data.messageDetail);
        } else {
          notify("success", "Welcome Back To CAR4R");

          dispatch(setEmail(""));
          dispatch(setPassword(""));

          const { accessToken, refreshToken } = res.data;

          // Dispatch token actions
          dispatch(setAccessToken(accessToken));
          dispatch(setRefreshToken(refreshToken));

          const role = await jwtDecode(accessToken);
          dispatch(setRole(role));

          console.log(role);

          switch (role) {
            case Role.CUSTOMER:
              navigate("/");
              break;

            case Role.MANAGER:
              navigate(routes.manager.overview);
              break;

            case Role.STAFF:
              navigate(routes.staff.overview);
              break;

            default:
              break;
          }
        }
      } catch (err) {
        console.log(err);
        notify("error", "Something went wrong, please try again.");
        setLoading(false);
      }
    }
    setLoading(false);

    dispatch(setEmail(""));
    dispatch(setPassword(""));
  };

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
      setLoading(false);
      notify("error", "Google login failed. Please try again.");
    },
  });

  return (
    <div
      className={`relative w-screen h-screen ${loading ? "flex justify-center items-center" : ""}`}
    >
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <img
            className="object-cover w-full h-screen -z-10"
            src="../../../src/assets/Background_LogSign.png"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 w-[35%] pb-14 rounded-2xl flex flex-col items-center bg-white">
            <div className="flex flex-col items-center mt-10">
              <Avatar classNameAdd="size-12" />
              <h1 className="text-3xl mt-3">Log In</h1>
              <span className="text-xl mt-4 tracking-wide">
                Don't have an account?
                <span
                  className="ml-1 underline hover:cursor-pointer hover:text-blue-500"
                  onClick={() => navigate("/signUp")}
                >
                  Sign Up
                </span>
              </span>
            </div>

            <GoogleButton
              txtVal="Log In With Google"
              handleClick={logInWithGoogle}
            />

            <Or classNameAdd="mt-8 mb-4" />

            <Form />

            <a
              onClick={() => navigate("/resetPassword")}
              className="mt-2 text-right w-5/6 mb-3 underline hover:cursor-pointer hover:text-blue-500"
            >
              Forgot Your Password
            </a>

            <ButtonAuth
              txtVal="Log In"
              classNameAdd="bg-[#C3C3C3] hover:bg-[#d1d1e0]"
              handleClick={handleLogIn}
            />

            <img
              className="absolute top-2 right-2 w-8 h-8 hover:scale-75 hover:cursor-pointer"
              src="../../../src/assets/XIcon.png"
              onClick={() => navigate("/")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
