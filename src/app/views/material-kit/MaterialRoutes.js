import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));
const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
const AppRadio = Loadable(lazy(() => import("./radio/AppRadio")));
const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));
const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
const AppExpansionPanel = Loadable(lazy(() => import("./expansion-panel/AppExpansionPanel")));

const materialRoutes = [
  { path: "/cpdev/material/table", element: <AppTable /> },
  { path: "/cpdev/material/form", element: <AppForm /> },
  { path: "/cpdev/material/buttons", element: <AppButton /> },
  { path: "/cpdev/material/icons", element: <AppIcon /> },
  { path: "/cpdev/material/progress", element: <AppProgress /> },
  { path: "/cpdev/material/menu", element: <AppMenu /> },
  { path: "/cpdev/material/checkbox", element: <AppCheckbox /> },
  { path: "/cpdev/material/switch", element: <AppSwitch /> },
  { path: "/cpdev/material/radio", element: <AppRadio /> },
  { path: "/cpdev/material/slider", element: <AppSlider /> },
  { path: "/cpdev/material/autocomplete", element: <AppAutoComplete /> },
  { path: "/cpdev/material/expansion-panel", element: <AppExpansionPanel /> },
  { path: "/cpdev/material/dialog", element: <AppDialog /> },
  { path: "/cpdev/material/snackbar", element: <AppSnackbar /> },
];

export default materialRoutes;
