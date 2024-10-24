import config from "../config";
import Home from "../pages/Home";
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
];

export { publicRoutes };
