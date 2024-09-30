import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import MembersPage from "./components/MembersPage/MembersPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/members",
        element: <MembersPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      <Toaster/>
    </QueryClientProvider>
  </StrictMode>
);
