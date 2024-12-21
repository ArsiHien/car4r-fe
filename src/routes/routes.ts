/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Auth from "../pages/Auth";
import { SidebarLayout } from "../layouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import ProfilePage from "../pages/Profile";
import { FC, ReactNode } from "react";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp/SignUp";
import ResetPwPage from "../pages/ResetPwPage";
import AddCar from "../pages/AddCar/AddCar";
import EditCar from "../pages/AddCar/EditCar";
import CarDetail from "../pages/CarDetail";
import OrderManagement from "../pages/StaffPages/OrderManagement";
import {
  ManagerOverview,
  ManagerDashboard,
  StaffManagement,
} from "../pages/ManagerPages";
import CarsManagement from "../pages/Management/CarsManagement";
import StaffSidebar from "../components/SideBar/StaffSideBar";
import ManagerSidebar from "../components/SideBar/ManagerSideBar";
import FilterSidebar from "../components/SideBar/FilterSideBar";
import { StaffOverview } from "../pages/StaffPages";
import CustomerSidebar from "../components/SideBar/CustomerSidebar";
import CustomerOrderManagement from "../pages/CustomerOrderManagement";
import Role from "../const/Role";
import BookingPage from "../pages/Booking";

interface RouteConfig {
  path: string;
  page: FC;
  layout?: FC<{ children: ReactNode; sidebar?: ReactNode }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebar?: FC<any>;
  allowedRoles?: Role[];
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, page: Home },
  // { path: config.routes.profile, page: ProfilePage },

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

  //MANAGER
  {
    path: config.routes.manager.overview,
    page: ManagerOverview,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.dashboard,
    page: ManagerDashboard,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.profile,
    page: Profile,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.staffManagement,
    page: StaffManagement,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.cars,
    page: CarsManagement,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.addCar,
    page: AddCar,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },
  {
    path: config.routes.manager.editCar,
    page: EditCar,
    layout: SidebarLayout,
    sidebar: ManagerSidebar,
    allowedRoles: [Role.MANAGER],
  },

  //STAFF
  {
    path: config.routes.staff.overview,
    page: StaffOverview,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
    allowedRoles: [Role.STAFF],
  },
  {
    path: config.routes.staff.profile,
    page: ProfilePage,
    sidebar: StaffSidebar,
    layout: SidebarLayout,
    allowedRoles: [Role.STAFF],
  },
  {
    path: config.routes.staff.orderManagement,
    page: OrderManagement,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
    allowedRoles: [Role.STAFF],
  },
  {
    path: config.routes.staff.cars,
    page: CarsManagement,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
    allowedRoles: [Role.STAFF],
  },

  {
    path: config.routes.staff.addCar,
    page: AddCar,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
    allowedRoles: [Role.STAFF],
  },
  {
    path: config.routes.staff.editCar,
    page: EditCar,
    layout: SidebarLayout,
    sidebar: StaffSidebar,
    allowedRoles: [Role.STAFF],
  },
  {
    path: config.routes.customer.orderManagement,
    page: CustomerOrderManagement,
    layout: SidebarLayout,
    sidebar: CustomerSidebar,
    allowedRoles: [Role.CUSTOMER],
  },
  {
    path: config.routes.customer.profile,
    page: Profile,
    layout: SidebarLayout,
    sidebar: CustomerSidebar,
    allowedRoles: [Role.CUSTOMER],
  },

  {
    path: config.routes.booking,
    page: BookingPage,
    allowedRoles: [Role.CUSTOMER],
  },
];

export { publicRoutes };
