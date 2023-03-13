import { authRoles } from "app/auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/cpdev/dashboard/default",
    icon: "dashboard",
    //auth: authRoles.sa, // ONLY SUPER ADMIN(SA) CAN ACCESS
  },
  {
    name: "Analytics",
    path: "/cpdev/dashboard/analytics",
    icon: "analytics",
    //auth: authRoles.admin, // ONLY SUPER ADMIN(SA) AND ADMIN CAN ACCESS
  },
  {
    name: "Alternative",
    path: "/cpdev/dashboard/alternative",
    icon: "analytics",
  },
  {
    name: "Inventory Management",
    path: "/cpdev/dashboard/inventory-management",
    icon: "store",
  },

  { label: "Pages", type: "label" },

  {
    name: "Customers",
    icon: "people",
    children: [
      { name: "Customer List", path: "/cpdev/pages/customer-list", iconText: "CL" },
      { name: "View Customer", path: "/cpdev/pages/view-customer", iconText: "VC" },
      { name: "New Customer", path: "/cpdev/pages/new-customer", iconText: "NC" },
    ],
  },
  {
    name: "Products",
    icon: "shopping_cart",
    children: [
      { name: "Product List", path: "/cpdev/pages/product-list", iconText: "PL" },
      { name: "View Product", path: "/cpdev/pages/view-product", iconText: "VP" },
      { name: "New Product", path: "/cpdev/pages/new-product", iconText: "NP" },
    ],
  },
  {
    name: "Orders",
    icon: "folder",
    children: [
      { name: "Order List", path: "/cpdev/pages/order-list", iconText: "OL" },
      { name: "View Order", path: "/cpdev/invoice/fdskfjdsuoiucrwevbgd", iconText: "VO" },
    ],
  },
  {
    name: "Help Center",
    icon: "help",
    children: [
      { name: "FAQ 1", path: "/cpdev/pages/faq-1", iconText: "F1" },
      { name: "FAQ 2", path: "/cpdev/pages/faq-2", iconText: "F2" },
    ],
  },
  {
    name: "Pricing",
    icon: "money",

    children: [
      { name: "Pricing 1", iconText: "P1", path: "/cpdev/others/pricing-1" },
      { name: "Pricing 2", iconText: "P2", path: "/cpdev/others/pricing-2" },
      { name: "Pricing 3", iconText: "P3", path: "/cpdev/others/pricing-3" },
      { name: "Pricing 4", iconText: "P4", path: "/cpdev/others/pricing-4" },
    ],
  },
  {
    name: "User List",
    icon: "people",
    children: [
      { name: "User List 1", path: "/cpdev/pages/user-list-1", iconText: "U1" },
      { name: "User List 2", path: "/cpdev/pages/user-list-2", iconText: "U2" },
      { name: "User List 3", path: "/cpdev/pages/user-list-3", iconText: "U3" },
      { name: "User List 4", path: "/cpdev/pages/user-list-4", iconText: "U3" },
    ],
  },
  {
    name: "Forms",
    icon: "description",

    children: [
      { name: "Order Form", path: "/cpdev/forms/order-form", iconText: "OF" },
      { name: "Invoice Form", path: "/cpdev/forms/invoice-form", iconText: "IF" },
      { name: "Property Listing Form", path: "/cpdev/forms/property-listing-form", iconText: "PF" },
      { name: "Basic", path: "/cpdev/forms/basic", iconText: "B" },
      { name: "Upload", path: "/cpdev/forms/upload", iconText: "U" },
      { name: "Wizard", path: "/cpdev/forms/wizard", iconText: "W" },
    ],
  },
  {
    name: "Matx List",
    icon: "list",

    children: [{ name: "List", path: "/cpdev/matx-list", iconText: "L" }],
  },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/cpdev/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/cpdev/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/cpdev/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/cpdev/session/404" },
    ],
  },
  { name: "Left Sidebar Card", path: "/cpdev/page-layouts/Left-sidebar-card", icon: "vertical_split" },
  { name: "User Profile", path: "/cpdev/page-layouts/user-profile", icon: "person" },
  { name: "Account", path: "/cpdev/page-layouts/account", icon: "manage_accounts" },

  { label: "Apps", type: "label" },
  {
    name: "Ecommerce",
    icon: "shopping_basket",

    children: [
      { name: "Shop", path: "/cpdev/ecommerce/shop", iconText: "S" },
      { name: "Cart", path: "/cpdev/ecommerce/cart", iconText: "C" },
      { name: "Checkout", path: "/cpdev/ecommerce/checkout", iconText: "CO" },
    ],
  },
  {
    name: "Scrum Board",
    icon: "group_work",
    path: "/cpdev/scrum-board/c5d7498bbcb84d81fc7454448871ac6a6e",
  },
  { name: "Invoice Builder", icon: "receipt", path: "/cpdev/invoice/list" },
  { name: "Calendar", icon: "date_range", path: "/cpdev/calendar" },
  { name: "Chat", icon: "chat", path: "/cpdev/chat" },
  { name: "Inbox", icon: "inbox", path: "/cpdev/inbox" },
  { name: "Todo", icon: "center_focus_strong", path: "/cpdev/todo/list" },
  { name: "CRUD Table", icon: "format_list_bulleted", path: "/cpdev/crud-table" },

  // { label: "Tables", type: "label" },
  // {
  //   name: "Data Table",
  //   icon: "table_view",

  //   children: [
  //     { name: "Simple Mui Table", path: "/cpdev/data-table/simple-mui-table", iconText: "T1" },
  //     { name: "Expandable Mui Table", path: "/cpdev/data-table/expandable-mui-table", iconText: "T2" },
  //   ],
  // },

  { label: "Components", type: "label" },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Auto Complete", path: "/cpdev/material/autocomplete", iconText: "A" },
      { name: "Buttons", path: "/cpdev/material/buttons", iconText: "B" },
      { name: "Checkbox", path: "/cpdev/material/checkbox", iconText: "C" },
      { name: "Dialog", path: "/cpdev/material/dialog", iconText: "D" },
      { name: "Drag and Drop", iconText: "D", path: "/cpdev/others/drag-and-drop" },
      { name: "Expansion Panel", path: "/cpdev/material/expansion-panel", iconText: "E" },
      { name: "Form", path: "/cpdev/material/form", iconText: "F" },
      { name: "Icons", path: "/cpdev/material/icons", iconText: "I" },
      { name: "Menu", path: "/cpdev/material/menu", iconText: "M" },
      { name: "Progress", path: "/cpdev/material/progress", iconText: "P" },
      { name: "Radio", path: "/cpdev/material/radio", iconText: "R" },
      { name: "Switch", path: "/cpdev/material/switch", iconText: "S" },
      { name: "Slider", path: "/cpdev/material/slider", iconText: "S" },
      { name: "Snackbar", path: "/cpdev/material/snackbar", iconText: "S" },
      { name: "Table", path: "/cpdev/material/table", iconText: "T" },
    ],
  },
  { name: "Map", icon: "add_location", path: "/cpdev/map" },

  { label: "Charts", type: "label" },
  {
    name: "Charts",
    icon: "trending_up",

    children: [
      { name: "Echarts", path: "/cpdev/charts/echarts", iconText: "E" },
      { name: "Recharts", path: "/cpdev/charts/recharts", iconText: "R" },
      { name: "Apex Charts", path: "/cpdev/charts/apex-charts", iconText: "A" },
    ],
  },
  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/",
  },
];

export const getfilteredNavigations = (navList = [], role) => {
  return navList.reduce((array, nav) => {
    if (nav.auth && nav.auth.includes(role)) {
      array.push(nav);
    } else {
      if (nav.children) {
        nav.children = getfilteredNavigations(nav.children, role);
        array.push(nav);
      }

      array.push(nav);
    }
    return array;
  }, []);
};
