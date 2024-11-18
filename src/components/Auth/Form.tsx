import { useState, useEffect } from "react";
import "./style.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [show, setShow] = useState(false);
  const passwordToggle: object[] = [
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

  // render
  return (
    <div className="w-5/6 text-[#666666]">
      <div className="mb-5">
        <h1 className="mb-1">Your email:</h1>
        <input
          className="focus:outline-none border-gradient w-full h-full p-4 rounded-xl border border-blue-600"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
