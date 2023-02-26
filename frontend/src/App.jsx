import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

// Components
import TopBar from "./components/topBar/TopBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";

// Context
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/AuthContext";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Col } from "react-bootstrap";

const App = () => {
  const queryClient = new QueryClient();
  const { darkMode } = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />;
    return children;
  };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <TopBar />
        <div style={{ display: "flex" }}>
          <Col md={0} lg={2} xl={2}>
            <LeftBar />
          </Col>
          <Col xs={12} md={12} lg={6} xl={7}>
            <Outlet />
          </Col>
          <Col md={0} lg={4} xl={3}>
            <RightBar />
          </Col>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
