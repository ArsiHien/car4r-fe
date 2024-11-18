/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import { SidebarLayout } from "../layouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import { FC } from "react";

interface RouteConfig {
  path: string;
  page: FC;
  layout?: FC;
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, page: Home },
  { path: config.routes.search, page: Search, layout:SidebarLayout },

  /*
   * layout là login page
   */
  { path: config.routes.login, page: Login, layout: Login },
];

export { publicRoutes };
