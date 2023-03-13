import Loadable from "app/components/Loadable";
import { lazy } from "react";

const CrudTable = Loadable(lazy(() => import("./CrudTable")));

const crudRoute = [{ path: "/cpdev/crud-table", element: <CrudTable /> }];

export default crudRoute;
