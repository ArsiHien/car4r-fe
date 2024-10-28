/*
  * Định nghĩa các route công khai(public route: path + page + layout được render)
*/
import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import { FC } from "react";

interface RouteConfig {
  path: string;
  component: FC;
  layout?: FC;
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },

  /*
    * layout là login page
  */
  { path: config.routes.login, component: Login, layout: Login}, 
];

export { publicRoutes };
