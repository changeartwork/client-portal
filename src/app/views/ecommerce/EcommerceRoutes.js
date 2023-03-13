import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Shop = Loadable(lazy(() => import("./Shop")));
const Cart = Loadable(lazy(() => import("./Cart")));
const Checkout = Loadable(lazy(() => import("./Checkout")));

const ecommerceRoutes = [
  { path: "/cpdev/ecommerce/shop", element: <Shop /> },
  { path: "/cpdev/ecommerce/cart", element: <Cart /> },
  { path: "/cpdev/ecommerce/checkout", element: <Checkout /> },
];

export default ecommerceRoutes;
