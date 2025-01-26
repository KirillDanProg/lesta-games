import Layout from "@/app/layout/layout";
import ShipsPage from "@/pages/ships.page/ui/ships.page";
import { RoutePath } from "@/shared/const";
import { Outlet, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: RoutePath.main,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: RoutePath.main,
        element: <ShipsPage />,
        index: true,
      },
    ],
  },
];
