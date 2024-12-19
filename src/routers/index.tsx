import { Dashboard } from "@/pages/dashboard";
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
  },
]);

export function Routers() {
  return <RouterProvider router={router} />;
}
