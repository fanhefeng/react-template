import { lazy } from "react";
import { AppRoutes } from "./types/app";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

const Routing: AppRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
];

export { default as NotFound } from "./pages/NotFound";
export default Routing;
