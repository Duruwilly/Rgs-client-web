import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));

export const publicRoute = [
  {
    path: "/",
    component: HomePage,
  },
];
