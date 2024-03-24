import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./main.css";
import { Shell } from "./Shell";
import { Me, Other, Work } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      {
        index: true,
        element: <Navigate to="/home/0" />,
      },
      {
        path: "/home/:index",
        element: <Me />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/other",
        element: <Other />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home/0" />,
  },
]);

createRoot(document.getElementById("app")).render(<RouterProvider router={router} />);
