import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Planet from "./pages/Planet.jsx";
import EditPlanet from "./pages/EditPlanet.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/", // Daftar planet
        element: <Home />,
      },
      {
        path: "/planets/:id", // Detail planet
        element: <Planet />,
      },
      {
        path: "/planets/:id/edit", // Edit planet
        element: <EditPlanet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
