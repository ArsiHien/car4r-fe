/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import { FC } from "react";
import Booking1 from "../pages/Booking/Booking1";
import Booking2 from "../pages/Booking/Booking2";
import Booking3 from "../pages/Booking/Booking3";
import Booking4 from "../pages/Booking/Booking4";
import OrderMag from "../pages/Management/OrderMag";
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
  { path: config.routes.bookingInfo1, page: Booking1, layout: Booking1 },
  { path: config.routes.bookingInfo2, page: Booking2, layout: Booking2 },
  { path: config.routes.booking3, page: Booking3, layout: Booking3 },
  { path: config.routes.booking4, page: Booking4, layout: Booking4 },
  { path: config.routes.ordermanagement, page: OrderMag, layout: OrderMag },


];

export { publicRoutes };
