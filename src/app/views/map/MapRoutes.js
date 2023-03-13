import Loadable from "app/components/Loadable";
import React, { lazy } from "react";

const AppMap = Loadable(lazy(() => import("./AppMap")));

const mapRoutes = [
  {
    path: "/cpdev/map",
    element: <AppMap />,
  },
];

export default mapRoutes;
