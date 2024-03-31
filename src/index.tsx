import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./main.css";
import { Me, Other, TailwindLabs, Work } from "./pages";
import { Shell } from "./Shell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      { index: true, element: <Navigate to={"/home"} /> },
      { path: "/home", element: <Me /> },
      { path: "/work", element: <Work /> },
      { path: "/other", element: <Other /> },
    ],
  },
  { path: "/tailwind-labs", element: <TailwindLabs /> },
  { path: "*", element: <Navigate to="/home" /> },
]);

createRoot(document.getElementById("app")).render(<RouterProvider router={router} />);
