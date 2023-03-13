import { authRoles } from "app/auth/authRoles";
import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Analytics = Loadable(lazy(() => import("./Analytics")));

const InventoryManagement = Loadable(lazy(() => import("./InventoryManagement")));

const dashboardRoutes = [
 
  { path: "/cpdev/dashboard/default", element: <Analytics /> },
  { path: "/cpdev/dashboard/inventory-management", element: <InventoryManagement /> },
];

export default dashboardRoutes;
