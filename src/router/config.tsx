import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProjectDetails from "../pages/project-details/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    // أضفنا /:id هنا لكي يستقبل المعرف الخاص بكل مشروع
    path: "/project-details/:id", 
    element: <ProjectDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;