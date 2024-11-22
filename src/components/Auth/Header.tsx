import { useState } from "react";
import { Avatar } from "../Avatar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-between pt-4 pb-4 border border-b-sky-400 shadow-black">
      <Avatar classNameAdd="size-11 ml-5" />
      <div className="mr-8 flex items-center">
        <button
          className="flex h-full p-3 mr-4 rounded-xl items-center border border-transparent hover:border-cyan-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          English(UnitedState)
          <img className="size-3" src="../../../src/assets/DownArrow.png" />
        </button>

        <button className="h-full pr-6 pl-6 rounded-xl border border-cyan-500">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
