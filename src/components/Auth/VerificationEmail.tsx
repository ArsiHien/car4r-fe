import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { notify } from "../../const/Notify";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
  setRole,
} from "../../store/Authen/authenSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "../../utils/JwtDecode";

const VerificationEmail = () => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/users/verifyRegister/${token}`,
      );
      console.log(res);

      if (res.data.message === "FAIL") {
        notify("error", res.data.messageDetail);
      } else {
        // Notify success
        notify("success", "Welcome to CAR4R");

        const { accessToken, refreshToken } = res.data;

        const role = await jwtDecode(accessToken);

        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        dispatch(setRole(role)); // Nếu bạn có action setRole trong Redux

        navigate("/");
      }
    } catch (err) {
      console.error(err);
      notify("error", "Failed to verify email. Please try again.");
    }
  };

  return (
    <div className="p-10 w-[35%] h-[55%] flex flex-col items-center justify-center bg-white shadow-lg rounded-lg">
      <div className="mb-8 text-6xl font-extrabold text-blue-600">CAR4R</div>
      <h1 className="text-3xl mb-6 text-gray-800">Verify Your Sign Up</h1>
      <span className="text-center text-sm text-gray-600 mb-6">
        We have sent you an email with a token to verify your email account.
        Please copy and paste it into the field below and click 'Verify' button
        to register your account.
      </span>

      <Input
        className="w-full mb-6 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your verification token"
        onChange={(e) => setToken(e.target.value)}
      />

      <Button
        className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        onClick={handleVerify}
      >
        Verify
      </Button>
    </div>
  );
};

export default VerificationEmail;
