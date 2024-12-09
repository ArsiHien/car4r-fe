import { useNavigate } from "react-router-dom";
import ButtonAuth from "../../components/Auth/ButtonAuth";
import Form from "../../components/Auth/Form";
import VerificationEmail from "../../components/Auth/VerificationEmail.tsx";
import { Avatar } from "../../components/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import axios from "axios";
import { notify } from "../../const/Notify.ts";
import { useState } from "react";
import { Spin } from "antd";

const SignUp = () => {
  const email = useSelector((state: RootState) => state.auth.email);

  const password = useSelector((state: RootState) => state.auth.password);

  const validateEmail = useSelector(
    (state: RootState) => state.auth.validateEmail,
  );

  const validatePw = useSelector((state: RootState) => state.auth.validatePw);

  // navigate
  const navigate = useNavigate();

  //state
  const [loading, setLoading] = useState(false);

  const [verifyEmail, setVerifyEmail] = useState(false);

  const handleSignUp = () => {
    console.log(email + " " + password);
    setLoading(true);

    if (validatePw.general && validateEmail) {
      axios
        .post("http://localhost:8080/api/v1/users/register", {
          email: email,
          password: password,
          role: "CUSTOMER",
        })
        .then((res) => {
          console.log(res);
          notify("info", res.data.messageDetail);
          setLoading(false);

          if (res.data.message === "SUCCESS") {
            setVerifyEmail(true);
          }
        })
        .catch((err) => {
          console.error(err);
          notify("error", "Not Sign Up Successfull");
          setLoading(false);
        });
    } else {
      notify("error", "Email Or Password Invalid");
      setLoading(false);
    }
  };

  return (
    <div
      className={`h-screen flex flex-row justify-center relative bg-gray-200 ${loading || verifyEmail ? "items-center" : ""}`}
    >
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          {verifyEmail ? (
            <VerificationEmail />
          ) : (
            <>
              <div className="absolute right-8">
                <h1 className="text-center">
                  {" "}
                  Already have an ccount?{" "}
                  <span
                    className="underline hover:cursor-pointer hover:text-blue-500"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </span>{" "}
                  <br />
                  <span
                    onClick={() => navigate("/resetPassword")}
                    className="underline hover:cursor-pointer hover:text-blue-500"
                  >
                    Forget your password?
                  </span>
                </h1>
              </div>

              <div className="w-[45%] flex flex-col items-center absolute top-24">
                <Avatar classNameAdd="size-14" />

                <div className="flex flex-col items-center rounded-xl shadow-black mt-10 pt-10 bg-white">
                  <span className="text-4xl font-semibold">
                    Create An Account
                  </span>
                  <br />
                  <span className="relative top-[-1rem] mb-5">
                    Account require email and password valid
                  </span>

                  <Form />

                  <div className="w-5/6 flex flex-row flex-wrap flex-1 mt-5 mb-10">
                    <div className="flex flex-row items-center w-1/2">
                      {validatePw.length ? (
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      ) : (
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      )}
                      <h1 className="text-sm">Use 8 or more characters</h1>
                    </div>

                    <div className="flex flex-row items-center w-1/2">
                      {validatePw.uLCase ? (
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      ) : (
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      )}
                      <h1 className="text-sm">
                        Use upper and lower case letter (e.g Aa)
                      </h1>
                    </div>

                    <div className="flex flex-row items-center w-1/2">
                      {validatePw.num ? (
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      ) : (
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      )}{" "}
                      <h1 className="text-sm">Use a number (e.g 1234)</h1>
                    </div>

                    <div className="flex flex-row items-center w-1/2">
                      {validatePw.symbol ? (
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      ) : (
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      )}{" "}
                      <h1 className="text-sm">Use a symbol(e.g !@#$)</h1>
                    </div>
                  </div>

                  <ButtonAuth
                    classNameAdd="bg-black text-white mb-5 hover:bg-gray-800"
                    txtVal="Sign Up"
                    handleClick={handleSignUp}
                  />

                  <h1 className="mb-10 text-center">
                    By creating an account, you agree to the{" "}
                    <span className="underline hover: cursor-pointer hover:text-blue-500">
                      Terms of use{" "}
                    </span>
                    and{" "}
                    <span className="underline hover:cursor-pointer hover:text-blue-500">
                      Privacy Policy
                    </span>
                    .{" "}
                  </h1>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SignUp;
