import { Dashboard } from "@/pages/dashboard";
import { Account } from "@/pages/dashboard/account";
import { Startups } from "@/pages/dashboard/ecosystem/startups";
import { StartupsDetails } from "@/pages/dashboard/ecosystem/startups/startups-details";
import { Login } from "@/pages/login";
import { SingUp } from "@/pages/sing-up";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sing-up",
    element: <SingUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "startups",
        element: <Startups/>,
      },
      {
        path: "account",
        element: <Account/>,
      },
      {
        path: "startups/:id",
        element: <StartupsDetails/>,
      }
    ]
  },
]);

export function Routers() {
  return <RouterProvider router={router} />;
}
