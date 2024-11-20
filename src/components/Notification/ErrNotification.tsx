import { useState } from "react";

const ErrNotification = ({ msg }) => {
  const [close, setClose] = useState(false);
  const pathIcon = {
    err: "../../../src/assets/Notification/Err.png",
    escape: "../../../src/assets/XIcon.png",
  };

  const handleClick = () => {
    setClose(true);
  };

  setTimeout(() => setClose(true), 1500);

  return (
    <div
      id="errNotification"
      className={`flex flex-row items-center bg-[#FECACA] p-5 relative top-[-56rem] left-[70rem] w-[30%] rounded-lg transition-opacity ease-in duration-[1s] opacity-100 ${close ? "opacity-0" : ""}`}
    >
      <img className="size-8" src={pathIcon.err} />
      <h1 className="text-lg ml-5 text-[#B04343]">{msg}</h1>
      <img
        className="size-8 hover:size-7 hover:border hover:border-red-600 hover:rounded-full ml-auto"
        src={pathIcon.escape}
        onClick={handleClick}
      />
    </div>
  );
};

export default ErrNotification;
