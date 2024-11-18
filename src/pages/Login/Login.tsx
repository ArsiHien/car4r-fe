import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import Form from "../../components/Auth/Form";
import GoogleButton from "../../components/Auth/GoogleButton";
import Or from "../../components/Auth/Or";
import { Avatar } from "../../components/Avatar";
import "./style.css";

const Login = () => {
  console.log("login page");

  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      <img
        className="object-cover w-full h-screen"
        src="../../../src/assets/Background_LogSign.png"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 w-[35%] pb-14 rounded-2xl flex flex-col items-center bg-white">
        <div className="flex flex-col items-center mt-10">
          <Avatar classNameAdd="size-12" />
          <h1 className="text-3xl mt-3">Log In</h1>
          <span className="text-xl mt-4">
            Don't have an account?
            <span
              className="underline hover:cursor-pointer"
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
          className="mt-2 text-right w-5/6 mb-3 underline hover:cursor-pointer"
        >
          Forgot Your Password
        </a>

        <ButtonAuth
          txtVal="Log In"
          classNameAdd="bg-[#C3C3C3] hover:bg-[#d1d1e0]"
        />

        <img
          className="absolute top-2 right-2 w-8 h-8 hover:scale-75 hover:cursor-pointer"
          src="../../../src/assets/XIcon.png"
        />
      </div>
    </div>
  );
};

export default Login;
