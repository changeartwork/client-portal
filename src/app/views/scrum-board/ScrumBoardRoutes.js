import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Board = Loadable(lazy(() => import("./Board")));
const AppScrumBoard = Loadable(lazy(() => import("./AppScrumBoard")));

const scrumBoardRoutes = [
  { path: "/cpdev/scrum-board/:id", element: <Board /> },
  { path: "/cpdev/scrum-board", element: <AppScrumBoard /> },
];

export default scrumBoardRoutes;
