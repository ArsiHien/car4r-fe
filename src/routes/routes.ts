/*
 * Định nghĩa các route công khai(public route: path + page + layout được render)
 */
import config from "../config";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import { FC } from "react";
import SignUp from "../pages/SignUp/SignUp";
import ResetPwPage from "../pages/ResetPwPage";

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
  { path: config.routes.auth, page: Auth, layout: Auth },
  { path: config.routes.signUp, page: SignUp, layout: SignUp },
  { path: config.routes.resetPassword, page: ResetPwPage, layout: ResetPwPage },
];

export { publicRoutes };
