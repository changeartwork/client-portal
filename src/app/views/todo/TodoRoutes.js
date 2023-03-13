import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppTodo = Loadable(lazy(() => import("./AppTodo")));
const TodoEditor = Loadable(lazy(() => import("./TodoEditor")));

const todoRoutes = [
  { path: "/cpdev/todo/list", element: <AppTodo /> },
  { path: "/cpdev/todo/list/:id", element: <TodoEditor /> },
];

export default todoRoutes;
