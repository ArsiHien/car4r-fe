import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import GoogleButton from "../../components/Auth/GoogleButton";
import Header from "../../components/Auth/Header";
import Or from "../../components/Auth/Or";

const Auth = () => {
  const pathImg = "../../../src/assets/Background_LogSign.png";

  const signUpWithGoogle = () => {};

  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap w-full h-screen overflow-hidden">
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
            handleClick={signUpWithGoogle}
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
    </div>
  );
};

export default Auth;
