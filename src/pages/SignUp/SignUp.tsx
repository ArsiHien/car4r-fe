import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import Form from "../../components/Auth/Form";
import { Avatar } from "../../components/Avatar";
import ResetPw from "../../components/Auth/ResetPw";

const SignUp = () => {
  const pw = "";

  const checkPassLength = () => {
    return pw.length >= 8 ? true : false;
  };

  // dieu huong
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-row justify-center relative bg-gray-200">
      <div className="absolute right-8">
        <h1 className="text-center">
          {" "}
          Already have an ccount?{" "}
          <span
            className="underline hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>{" "}
          <br />
          <span
            onClick={() => navigate("/resetPassword")}
            className="underline hover:cursor-pointer"
          >
            Forget your password?
          </span>
        </h1>
      </div>

      <div className="w-[45%] flex flex-col items-center absolute top-24">
        <Avatar classNameAdd="size-14" />

        <div className="flex flex-col items-center rounded-xl shadow-black mt-10 pt-10 bg-white">
          <span className="text-4xl font-semibold">Create An Account</span>
          <br />
          <span className="relative top-[-1rem] mb-5">
            Account require email and password valid
          </span>

          <Form />

          <div className="w-5/6 flex flex-row flex-wrap flex-1 mt-5 mb-10">
            <div className="flex flex-row items-center w-1/2">
              <div className="w-2 h-2 bg-blue-100 rounded-full mr-2"></div>
              <h1 className="text-sm">Use 8 or more characters</h1>
            </div>
            <div className="flex flex-row items-center w-1/2">
              <div className="w-2 h-2 bg-blue-100 rounded-full mr-2"></div>
              <h1 className="text-sm">
                Use upper and lower case letter (e.g Aa)
              </h1>
            </div>
            <div className="flex flex-row items-center w-1/2">
              <div className="w-2 h-2 bg-blue-100 rounded-full mr-2"></div>
              <h1 className="text-sm">Use a number (e.g 1234)</h1>
            </div>
            <div className="flex flex-row items-center w-1/2">
              <div className="w-2 h-2 bg-blue-100 rounded-full mr-2"></div>
              <h1 className="text-sm">Use a symbol(e.g !@#$)</h1>
            </div>
          </div>

          <ButtonAuth
            classNameAdd="bg-black text-white mb-5"
            txtVal="Sign Up"
          />

          <h1 className="mb-10 text-center">
            By creating an account, you agree to the{" "}
            <span className="underline hover: cursor-pointer">
              Terms of use{" "}
            </span>
            and{" "}
            <span className="underline hover: cursor-pointer">
              Privacy Policy
            </span>
            .{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;