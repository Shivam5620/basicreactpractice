import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ListLayout from "pages/ListLayout";
import CardLayout from "pages/CardLayout";
import CardLayoutForm from "pages/CardLayoutForm";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <ListLayout /> },
    { path: "*", element: <NotFound /> },
    {
      path: "listlayout",
      element: <ListLayout />,
    },
    {
      path: "cardlayout",
      element: <CardLayout />,
    },
    {
      path: "cardlayoutform",
      element: <CardLayoutForm />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
