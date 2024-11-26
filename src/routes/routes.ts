/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Auth from "../pages/Auth";
import { SidebarLayout } from "../layouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Overview from "../pages/StaffOverview";
import Profile from "../pages/Profile";
import Cars from "../pages/CarMag/Cars";
import { FC, ReactNode } from "react";

import Booking1 from "../pages/Booking/Booking1";
import Booking2 from "../pages/Booking/Booking2";
import Booking3 from "../pages/Booking/Booking3";
import Booking4 from "../pages/Booking/Booking4";
import OrderMag from "../pages/Management/OrderMag";

import SignUp from "../pages/SignUp/SignUp";
import ResetPwPage from "../pages/ResetPwPage";
import AddCar from "../pages/AddCar/AddCar";
import EditCar from "../pages/AddCar/ChangeCarDetails";
import FilterSideBar from "../components/SideBar/FilterSideBar";

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
    sidebar: FilterSideBar,
  },

  /*
   * layout là login page
   */
  { path: config.routes.login, page: Login, layout: Login },
  { path: config.routes.overview, page: Overview, layout: Overview },
  { path: config.routes.profile, page: Profile, layout: Profile },
  { path: config.routes.carMag, page: Cars, layout: Cars },
  { path: config.routes.addCar, page: AddCar, layout: AddCar },
  { path: config.routes.editCar, page: EditCar, layout: EditCar },

  { path: config.routes.auth, page: Auth, layout: Auth },
  { path: config.routes.signUp, page: SignUp, layout: SignUp },
  { path: config.routes.resetPassword, page: ResetPwPage, layout: ResetPwPage },

  { path: config.routes.bookingInfo1, page: Booking1, layout: Booking1 },
  { path: config.routes.bookingInfo2, page: Booking2, layout: Booking2 },
  { path: config.routes.booking3, page: Booking3, layout: Booking3 },
  { path: config.routes.booking4, page: Booking4, layout: Booking4 },
  { path: config.routes.ordermanagement, page: OrderMag, layout: OrderMag },
];

export { publicRoutes };
