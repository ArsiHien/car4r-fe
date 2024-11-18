/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Overview from "../pages/StaffOverview"
import Profile from "../pages/Profile"
import Cars from "../pages/CarMag/Cars"
import StaffMag from "../pages/ManagerView/StaffMag"
import Revenue from "../pages/ManagerView/Revenue";
import { FC } from "react";

interface RouteConfig {
  path: string;
  page: FC;
  layout?: FC;
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, page: Home },
  { path: config.routes.search, page: Search },
  

  /*
   * layout là login page
   */
  { path: config.routes.login, page: Login, layout: Login },
  { path: config.routes.overview, page: Overview,layout: Overview},
  { path: config.routes.profile, page: Profile,layout: Profile},
  { path: config.routes.carMag, page: Cars, layout: Cars },
  { path: config.routes.staffMag, page: StaffMag, layout: StaffMag },
  { path: config.routes.revenue, page: Revenue, layout: Revenue}
];

export { publicRoutes };
