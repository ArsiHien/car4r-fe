const ResetPw = () => {
  const pathImg = "../../../src/assets/Auth/ResetPw.png";
  return (
    <div className="bg-white flex flex-col items-center p-14 absolute top-16 h-2/3 rounded-xl min-h-max">
      <img className="size-56" src={pathImg} />
      <h1 className="font-bold pt-14 text-3xl">Forgot Your Password?</h1>
      <h1 className="text-center pt-5 pb-5 text-[#899296]">
        Email Your Email And We'll Help You Reset Your Password
      </h1>
      <input
        type="email"
        className="w-full p-4 rounded-xl bg-blue-100 focus:outline-none"
        placeholder="Enter Your Email You Register"
      />
      <button className="bg-[#213956] text-white pt-3 pb-3 pr-5 pl-5 rounded-lg mt-6 hover:bg-[#3A8EDB]">
        Continue
      </button>
    </div>
  );
};

export default ResetPw;
