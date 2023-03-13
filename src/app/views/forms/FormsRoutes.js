import Loadable from "app/components/Loadable";
import { lazy } from "react";

const BasicForm = Loadable(lazy(() => import("./BasicForm")));
const UploadForm = Loadable(lazy(() => import("./UploadForm")));
const WizardForm = Loadable(lazy(() => import("./WizardForm")));
const OrderForm = Loadable(lazy(() => import("./order-form/OrderForm")));
const InvoiceForm = Loadable(lazy(() => import("./invoice-form/InvoiceForm")));
const PropertyListingForm = Loadable(lazy(() => import("./PropertyListingForm")));
const CustomerForm = Loadable(lazy(() => import("../pages/customers/customer-form/CustomerForm")));

const formsRoutes = [
  { path: "/cpdev/forms/basic", element: <BasicForm /> },
  { path: "/cpdev/forms/upload", element: <UploadForm /> },
  { path: "/cpdev/forms/wizard", element: <WizardForm /> },
  { path: "/cpdev/forms/order-form", element: <OrderForm /> },
  { path: "/cpdev/forms/property-listing-form", element: <PropertyListingForm /> },
  { path: "/cpdev/forms/customer-form", element: <CustomerForm /> },
  { path: "/cpdev/forms/invoice-form", element: <InvoiceForm /> },
];

export default formsRoutes;
