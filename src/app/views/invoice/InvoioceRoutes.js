import Loadable from "app/components/Loadable";
import React, { lazy } from "react";

const InvoiceList = Loadable(lazy(() => import("./InvoiceList")));
const InvoiceDetails = Loadable(lazy(() => import("./InvoiceDetails")));
const InvoiceList2 = Loadable(lazy(() => import("./InvoiceList")));

const invoiceRoutes = [
  { path: "/cpdev/invoice/list", element: <InvoiceList /> },
  { path: "/cpdev/invoice/:id", element: <InvoiceDetails /> },
  { path: "/cpdev/invoice/edit/:id", element: <InvoiceList2 /> },
];

export default invoiceRoutes;
