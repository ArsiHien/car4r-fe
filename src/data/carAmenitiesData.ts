import { IconType } from "react-icons";
import {
  CiMap,
  CiBluetooth,
  CiCamera,
  CiUsb,
  CiGlobe,
  CiCircleCheck,
} from "react-icons/ci";
import { MdDriveEta, MdOutlineTireRepair } from "react-icons/md";
import { TfiLayoutMediaCenter } from "react-icons/tfi";

type CarAmenity = {
  name: string;
  icon: IconType;
};

export const carAmenities: CarAmenity[] = [
  { name: "Map", icon: CiMap },
  { name: "Bluetooth", icon: CiBluetooth },
  { name: "Dashcam", icon: CiCamera },
  { name: "Rearview Camera", icon: CiCamera },
  { name: "Tire Pressure Sensors", icon: MdOutlineTireRepair },
  { name: "GPS Navigation", icon: CiGlobe },
  { name: "USB Port", icon: CiUsb },
  { name: "Spare Tire", icon: MdOutlineTireRepair },
  { name: "DVD Player", icon: TfiLayoutMediaCenter },
  { name: "ETC", icon: CiCircleCheck },
  { name: "Airbag Safety", icon: MdDriveEta },
];
