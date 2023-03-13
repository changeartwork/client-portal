import Loadable from "app/components/Loadable";
import { lazy } from "react";

const MatxCalendar = Loadable(lazy(() => import("./MatxCalendar")));

const calendarRoutes = [{ path: "/cpdev/calendar", element: <MatxCalendar /> }];

export default calendarRoutes;
