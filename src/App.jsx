import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router";
import {ProtectedRoute} from "./pages/routes/ProtectedRoute";
import HomeScreen from "./pages/Home/HomeScreen";
import LoginScreen from "./pages/Login/LoginScreen";
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    const accessToken = useSelector((state) => state.authState.accessToken);


    return (
        <BrowserRouter>
          <Routes>
                <Route element={<ProtectedRoute accessToken={accessToken} />}>
                    <Route path="/home" element={<HomeScreen />} />
                </Route>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<div/>} />
            </Routes>
        </BrowserRouter>

    );
};

export default App