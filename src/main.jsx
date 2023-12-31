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
import Login from "./pages/Login&Reg/Login.jsx";
import Reg from "./pages/Login&Reg/Reg.jsx";
import MediaProvider from "./MediaProvider.jsx/MediaProvider.jsx";
import LearnQuran from "./pages/LearnQuran/LearnQuran.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import MonthlyMasjidBill from "./pages/MonthlyMasjidBill/MonthlyMasjidBill.jsx";
import Donate from "./pages/Donate/Donate.jsx";
import Hadith from "./pages/Hadith/Hadith.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Setting from "./pages/Setting/Setting.jsx";
import AdminRoute from "./pages/AdminRoute/AdminRoute.jsx";
import ManageUsers from "./pages/Dashboard/ManageUsers/ManageUsers.jsx";
import ManageResources from "./pages/Dashboard/ManageResources/ManageResources.jsx";
import MasjidFund from "./pages/Dashboard/MasjidFund/MasjidFund.jsx";
import AdminHome from "./pages/Dashboard/AdminHome/AdminHome.jsx";


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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Reg></Reg>,
      },
      {
        path: "quran/learn",
        element: <LearnQuran></LearnQuran>
      },
      {
        path: "resources",
        element: <Resources></Resources>
      },
      {
        path: "monthly_masjid_bill",
        element: <MonthlyMasjidBill></MonthlyMasjidBill>
      },
      {
        path: "donate",
        element: <Donate></Donate>
      },
      {
        path: "hadith",
        element: <Hadith></Hadith>
      },
      
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "setting",
        element: <Setting></Setting>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: "admin_home",
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path: "manage_users",
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path: "manage_resources",
            element: <AdminRoute><ManageResources></ManageResources></AdminRoute>
          },
          {
            path: "masjid_fund",
            element: <AdminRoute><MasjidFund></MasjidFund></AdminRoute>
          },
        ]
      },
      
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MediaProvider>
          <RouterProvider router={router} />
        </MediaProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
