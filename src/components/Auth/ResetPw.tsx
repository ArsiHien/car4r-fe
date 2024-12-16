import { useState } from "react";
import { notify } from "../../const/Notify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const ResetPw = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const pathImg = "../../../src/assets/Auth/ResetPw.png";
  const navigate = useNavigate();

  // validate
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // handleClickButton
  const handleResetPw = () => {
    setLoading(true);

    if (!validateEmail(email)) {
      notify("error", "Not Validate Email. Try Again");
      setLoading(false);
    } else {
      axios
        .get(`http://localhost:8080/api/v1/users/resetPassword/${email}`)
        .then((res) => {
          console.log(res);

          if (res.data.message === "SUCCESS") {
            notify("success", res.data.messageDetail);
            navigate("/login");
          } else {
            notify("error", res.data.messageDetail);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
        <div className="bg-white flex flex-col items-center p-14 absolute top-16 h-2/3 rounded-xl min-h-max">
          <img className="size-56" src={pathImg} />
          <h1 className="font-bold pt-14 text-3xl">Forgot Your Password?</h1>
          <h1 className="text-center pt-5 pb-5 text-[#899296]">
            Email Your Email And We'll Help You Reset Your Password
          </h1>

          <input
            type="email"
            className={`w-full p-4 rounded-xl bg-blue-100 border border-5 ${
              validateEmail(email) ? "border-black-500" : "border-red-500"
            }  focus:outline-none `}
            placeholder="Enter Your Email You Register"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="bg-[#213956] text-white pt-3 pb-3 pr-5 pl-5 rounded-lg mt-6 hover:bg-[#3A8EDB]"
            onClick={handleResetPw}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default ResetPw;
