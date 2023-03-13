import Loadable from "app/components/Loadable";
import React, { lazy } from "react";

const AppChat = Loadable(lazy(() => import("./AppChat")));

const chatRoutes = [{ path: "/cpdev/chat", element: <AppChat /> }];

export default chatRoutes;
