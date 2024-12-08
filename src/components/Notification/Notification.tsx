import { useState, useEffect } from "react";
import typeNotify from "../../const/TypeNotify";
import INotify from "../../types/INotify";

// order: err -> success -> info -> warn -> none
// two props: type, msg
const Notification = ({
  typeOfNotify,
  msg,
}: {
  typeOfNotify: typeNotify;
  msg: string;
}) => {
  const notifyArr: INotify[] = [
    {
      typeNotify: typeNotify.ERROR,
      pathIconNotify: "../../../src/assets/Notification/Err.png",
      bgColor: "#FECACA",
    },
    {
      typeNotify: typeNotify.SUCCESS,
      pathIconNotify: "../../../src/assets/Notification/Success.png",
      bgColor: "#BBF7D0",
    },
    {
      typeNotify: typeNotify.INFOR,
      pathIconNotify: "../../../src/assets/Notification/Infor.png",
      bgColor: "#BFDBFE",
    },
    {
      typeNotify: typeNotify.WARN,
      pathIconNotify: "../../../src/assets/Notification/Warning.png",
      bgColor: "#FED7AA",
    },
  ];

  const pathXIcon = "../../../src/assets/XIcon.png";

  const [pathIconNotify, setPathIconNotify] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const matchedNotify = notifyArr.find(
      (notifyElement) => notifyElement.typeNotify === typeOfNotify
    );

    if (matchedNotify) {
      setPathIconNotify(matchedNotify.pathIconNotify);
      setBgColor(matchedNotify.bgColor);
    }
    console.log(isVisible);

    setTimeout(() => setIsVisible(false), 1500);

    console.log("isVisible: " + isVisible);
  }, [typeOfNotify]);

  const handleClick = () => {
    console.log("handleclick");
    setIsVisible(false);
  };

  return (
    <div
      className={`flex flex-row items-center p-5 absolute top-[1.5rem] left-[70rem] w-[30%] rounded-lg ${
        isVisible ? "" : "transition-opacity ease-in duration-[1s] opacity-0"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <img className="size-8" src={pathIconNotify} />
      <h1 className="text-lg ml-5 text-[#B04343]">{msg}</h1>
      <img
        className="size-8 hover:size-7 hover:border hover:border-red-600 hover:rounded-full ml-auto"
        src={pathXIcon}
        onClick={handleClick}
      />
    </div>
  );
};

export default Notification;
