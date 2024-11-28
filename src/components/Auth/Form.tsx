import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {
  setPassword,
  setUserName,
  setValidateEmail,
  setValidatePw,
} from "../../store/Authen/authenSlice";
import IValidatePw from "../../type/IValidatePw";

const Form = () => {
  const dispatch = useDispatch();
  const [validEmail, setValidEmail] = useState(false);

  const [show, setShow] = useState(false);
  const passwordToggle = [
    {
      hidePath: "../../../src/assets/Auth/HidePass.png",
      value: "Hide",
    },
    {
      showPath: "../../../src/assets/Auth/ShowPass.png",
      value: "Show",
    },
  ];

  //logic
  // validate
  //validate email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const res = emailRegex.test(email);
    dispatch(setValidateEmail(res));
    return res;
  };

  // validate password
  const validatePwLength = (pW: string): boolean => {
    return pW.length >= 8;
  };

  const validatePwULCase = (pW: string): boolean => {
    return /[a-z]/.test(pW) && /[A-Z]/.test(pW);
  };

  const validatePwUseNum = (pW: string): boolean => {
    return /\d/.test(pW);
  };

  const validatePwUseSym = (pW: string): boolean => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(pW);
  };

  const validatePw = (pW: string): boolean => {
    return (
      validatePwLength(pW) &&
      validatePwULCase(pW) &&
      validatePwUseNum(pW) &&
      validatePwUseSym(pW)
    );
  };

  // render
  return (
    <div className="w-5/6 text-[#666666]">
      <div className="mb-5">
        <h1 className="mb-1">Your email:</h1>
        <input
          className="focus:outline-none border-gradient w-full h-full p-4 rounded-xl border border-blue-600"
          type="email"
          onChange={(e) => {
            const email = e.target.value;
            dispatch(setUserName(email));
            setValidEmail(validateEmail(email));
          }}
        />
        {validEmail ? (
          <></>
        ) : (
          <h1 className="text-red-600 text-sm">
            The email address has an invalid format.
          </h1>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <h1 className="mb-1">Your password:</h1>
        <div className="flex items-center space-x-2">
          <img
            onClick={() => {
              setShow(!show);
              console.log(show);
            }}
            className="size-5 hover:cursor-pointer"
            src={show ? passwordToggle[0].hidePath : passwordToggle[1].showPath}
          />
          <span>
            {show ? passwordToggle[0].value : passwordToggle[1].value}
          </span>
        </div>
        <input
          className="focus:outline-none border-gradient w-full h-full p-4 rounded-xl border border-blue-600"
          type={show ? "password" : "text"}
          onChange={(e) => {
            const pW = e.target.value;
            dispatch(setPassword(pW));

            const validatePwO: IValidatePw = {
              length: validatePwLength(pW),
              uLCase: validatePwULCase(pW),
              num: validatePwUseNum(pW),
              symbol: validatePwUseSym(pW),
              general: validatePw(pW),
            };

            dispatch(setValidatePw(validatePwO));
          }}
        />
      </div>
    </div>
  );
};

export default Form;
