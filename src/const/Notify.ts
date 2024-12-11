import { notification } from "antd";
import { IconType } from "antd/es/notification/interface";
import "./style.css";

const notify = (typeNotify: IconType, message: string) => {
  let bgColor: string = "";

  switch (typeNotify) {
    case "error":
      bgColor = "#FECACA";
      break;

    case "success":
      bgColor = "#BBF7D0";
      break;

    case "info":
      bgColor = "#BFDBFE";
      break;

    case "warning":
      bgColor = "#FED7AA";
      break;

    default:
      break;
  }

  notification.open({
    type: typeNotify,
    message: message,
    className: "custom-notify",
    duration: 6,
    style: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      backgroundColor: bgColor,
      width: "450px",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "5px",
    },
  });
};

export { notify };
