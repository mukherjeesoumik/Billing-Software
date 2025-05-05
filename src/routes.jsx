import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  CreditCardIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import Customers from "@/pages/dashboard/customers";
import Products from "@/pages/dashboard/products";
import Invoices from "@/pages/dashboard/invoices";
import Payments from "@/pages/dashboard/payments";
import Reports from "@/pages/dashboard/reports";
import Settings from "@/pages/dashboard/settings";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Customers",
        path: "/customers",
        element: <Customers />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Products/Services",
        path: "/products",
        element: <Products />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Invoices",
        path: "/invoices",
        element: <Invoices />,
      },
      {
        icon: <CreditCardIcon {...icon} />,
        name: "Payments",
        path: "/payments",
        element: <Payments />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "Reports",
        path: "/reports",
        element: <Reports />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Settings",
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
