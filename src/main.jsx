import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { ToastProvider } from "./context/auth-toast.context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
// import SignupPage from "./components/pages/signup.page";
// import LoginPage from "./components/pages/login.page";
// import AccountPage from "./components/pages/account.page";
// import HomeTemplate from "./components/templates/home.template";
// import BoardPage from "./components/pages/board.page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router}></RouterProvider>
    </ToastProvider>
  </React.StrictMode>
);
