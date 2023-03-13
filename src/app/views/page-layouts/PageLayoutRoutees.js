import Loadable from "app/components/Loadable";
import { lazy } from "react";

const LeftSidebarCard = Loadable(lazy(() => import("./LeftSidebarCard")));
const UserProfile = Loadable(lazy(() => import("./user-profile/UserProfile")));

const pageLayoutRoutes = [
  {
    path: "/cpdev/page-layouts/Left-sidebar-card",
    element: <LeftSidebarCard />,
  },
  {
    path: "/cpdev/page-layouts/user-profile",
    element: <UserProfile />,
  },
];

export default pageLayoutRoutes;
