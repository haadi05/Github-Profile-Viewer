import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Profiles from "./components/Profiles.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/profiles/:UserName",
    element: <App />,
    children: [
      {
        path: "",
        element: <Profiles />,
        loader: async ({ params }) => {
          const user = await fetch(
            `https://api.github.com/users/${params.UserName}`
          ).then((res) => res.json());
          const repos = await fetch(
            `https://api.github.com/users/${params.UserName}/repos?sort=updated&direction=desc`
          ).then((res) => res.json());
          return { user, repos };
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
