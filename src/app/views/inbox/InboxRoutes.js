import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppInbox = Loadable(lazy(() => import("./AppInbox")));

const inboxRoute = [{ path: "/cpdev/inbox", element: <AppInbox /> }];

export default inboxRoute;
