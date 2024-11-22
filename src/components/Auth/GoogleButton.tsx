const GoogleButton = ({ txtVal = "" }) => {
  return (
    <button className="border-gradient bg-white w-5/6 rounded-full h-16 mt-10 hover:bg-[#e6edf2]">
      <span className="flex justify-center w-full">
        <img
          className="mr-3"
          src="../../../src/assets/SocialMedia/Google.png"
        />
        {txtVal}
      </span>
    </button>
  );
};

export default GoogleButton;
