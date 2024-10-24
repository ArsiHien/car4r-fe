import config from "../config";
import Home from "../pages/Home";
import Search from "../pages/Search";
import { SidebarLayout } from "../layouts";
import { FC } from "react";

interface RouteConfig {
  path: string;
  component: FC;
  layout?: FC;
}

const publicRoutes: RouteConfig[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search, layout: SidebarLayout },
];

export { publicRoutes };
