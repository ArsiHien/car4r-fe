import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import Form from "../../components/Auth/Form";
import GoogleButton from "../../components/Auth/GoogleButton";
import Or from "../../components/Auth/Or";
import { Avatar } from "../../components/Avatar";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import ErrNotification from "../../components/Notification/ErrNotification";
import { useState } from "react";

const Login = () => {
  // get state global
  const email = useSelector((state: RootState) => state.auth.email);
  const pW = useSelector((state: RootState) => state.auth.pW);

  const validateEmail = useSelector(
    (state: RootState) => state.auth.validateEmail,
  );

  const validatePw = useSelector(
    (state: RootState) => state.auth.validatePw.general,
  );

  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const msgValue = {
    notValid: "The email or password is not valid",
  };

  enum alertType {
    ERROR = 0,
    SUCCESS,
    INFOR,
    WARN,
    NONE,
  }
  const [alert, setAlert] = useState(alertType.NONE);

  // logic
  // handle login
  const handleLogIn = () => {
    console.log("/Page/Login: Click Log In Button");
    console.log(email);
    console.log(pW);
    console.log(validateEmail);
    console.log(validatePw);
    if (!validateEmail || !validatePw) {
      setMsg(msgValue.notValid);
      setAlert(alertType.ERROR);
      console.log(alert);
    }
  };

  return (
    <div className="relative w-screen h-screen">
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

        <GoogleButton txtVal="Log In With Google" />

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
      {alert === alertType.ERROR ? <ErrNotification msg={msg} /> : <></>}
    </div>
  );
};

export default Login;
