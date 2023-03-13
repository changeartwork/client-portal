import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppEchart = Loadable(lazy(() => import("./echarts/AppEchart")));
const AppRechart = Loadable(lazy(() => import("./recharts/AppRechart")));
const ApexCharts = Loadable(lazy(() => import("./apex-charts/ApexCharts")));

const chartsRoute = [
  { path: "/cpdev/charts/echarts", element: <AppEchart /> },
  { path: "/cpdev/charts/recharts", element: <AppRechart /> },
  { path: "/cpdev/charts/apex-charts", element: <ApexCharts /> },
];

export default chartsRoute;
