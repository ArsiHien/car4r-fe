/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Auth from "../pages/Auth";
import { SidebarLayout } from "../layouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import { FC, ReactNode } from "react";
import Booking1 from "../pages/Booking/Booking1";
import Booking2 from "../pages/Booking/Booking2";
import Booking3 from "../pages/Booking/Booking3";
import Booking4 from "../pages/Booking/Booking4";
import SignUp from "../pages/SignUp/SignUp";
import ResetPwPage from "../pages/ResetPwPage";
import AddCar from "../pages/AddCar/AddCar";
import EditCar from "../pages/AddCar/ChangeCarDetails";
import CarDetail from "../pages/CarDetail";
import OrderManagement from "../pages/StaffPages/OrderManagement";
import {
  ManagerOverview,
  ManagerDashboard,
  StaffManagement,
} from "../pages/ManagerPages";
import CarsManagement from "../pages/Management/CarsManagement";
import StaffSidebar from "../components/SideBar/StaffSidebar";
import ManagerSidebar from "../../components/SideBar/ManagerSidebar";
import FilterSidebar from "../../components/SideBar/FilterSidebar";
import { StaffOverview } from "../pages/StaffPages";

interface RouteConfig {
  path: string;
  page: FC;
  layout?: FC<{ children: ReactNode; sidebar?: ReactNode }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebar?: FC<any>;
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, page: Home },

  {
    path: config.routes.search,
    page: Search,
    layout: SidebarLayout,
    sidebar: FilterSidebar,
  },
  { path: config.routes.carDetail, page: CarDetail },

  { path: config.routes.login, page: Login, layout: Login },
  { path: config.routes.auth, page: Auth, layout: Auth },
  { path: config.routes.signUp, page: SignUp, layout: SignUp },
  { path: config.routes.resetPassword, page: ResetPwPage, layout: ResetPwPage },

  {
    path: config.routes.manager.overview,
    page: ManagerOverview,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.manager.dashboard,
    page: ManagerDashboard,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.manager.staffManagement,
    page: StaffManagement,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.manager.cars,
    page: CarsManagement,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.manager.addCar,
    page: AddCar,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.manager.editCar,
    page: EditCar,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
  },
  {
    path: config.routes.staff.overview,
    page: StaffOverview,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
  },
  {
    path: config.routes.staff.orderManagement,
    page: OrderManagement,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
  },
  {
    path: config.routes.staff.cars,
    page: CarsManagement,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
  },

  {
    path: config.routes.staff.addCar,
    page: AddCar,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
  },
  {
    path: config.routes.staff.editCar,
    page: EditCar,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
  },

  { path: config.routes.bookingInfo1, page: Booking1, layout: Booking1 },
  { path: config.routes.bookingInfo2, page: Booking2, layout: Booking2 },
  { path: config.routes.booking3, page: Booking3, layout: Booking3 },
  { path: config.routes.booking4, page: Booking4, layout: Booking4 },
];

export { publicRoutes };
