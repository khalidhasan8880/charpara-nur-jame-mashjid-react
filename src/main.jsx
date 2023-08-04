import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home.jsx";
import Quran from "./pages/Quran/Quran.jsx";
import Surah from "./pages/Surah/Surah.jsx";
import QuranAudio from "./pages/QuranAudio/QuranAudio.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/quran",
        element: <Quran></Quran>,
      },
      {
        path: "/quran/:id",
        element: <Surah></Surah>,
      },
      {
        path: "/quran/audio",
        element: <QuranAudio></QuranAudio>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
