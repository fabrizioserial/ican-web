import React from "react";
import {Route, Routes} from "react-router";
import {ProtectedRoute} from "./pages/routes/ProtectedRoutes";
import HomeScreen from "./pages/Home/HomeScreen";
import LoginScreen from "./pages/Login/LoginScreen";
import {useSelector} from "react-redux";
import authState from "./redux/slices/authSlice";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    const accessToken = useSelector((state) => state.authState.accessToken);
    console.log(accessToken)
    return (
        <BrowserRouter>
          <Routes>
                <Route element={<ProtectedRoute accessToken={accessToken} />}>
                    <Route path="/" element={<HomeScreen />} />
                </Route>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<div/>} />
            </Routes>
        </BrowserRouter>

    );
};

export default App