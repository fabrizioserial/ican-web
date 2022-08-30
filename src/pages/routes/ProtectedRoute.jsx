import { Navigate } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";

export const ProtectedRoute = ({ accessToken, children }) => {
    if (!accessToken) { return <Navigate to="/login" replace />; }

    return children ?? <Outlet />;
};