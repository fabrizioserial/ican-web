import React from 'react';
import {Outlet, Route, Routes} from 'react-router';
import {ProtectedRoute} from './pages/routes/ProtectedRoute';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import {useSelector} from 'react-redux';
import {BrowserRouter, Navigate} from 'react-router-dom';
import {StyledBox} from "./common/styledCommonComponents";
import Wrapper from "./componenets/Navbar/Wrapper";
import Navbar from "./componenets/Navbar";

const App = () => {
    const accessToken = useSelector((state) => state.authSlice.accessToken);

    return (
        <BrowserRouter>

            <Routes>
                <Route element={<ProtectedRoute accessToken={accessToken}/>}>

                        <Route element={<Wrapper/>}>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/statistics" element={<StyledBox css={{
                                textAlign: 'center',
                                fontSize: '23px',
                                padding: '100px'
                            }}> Statistics</StyledBox>}/>
                            <Route path="/my-patients" element={<StyledBox
                                css={{textAlign: 'center', fontSize: '23px', padding: '100px'}}> My
                                patients</StyledBox>}/>
                            <Route path="/settings" element={<StyledBox
                                css={{textAlign: 'center', fontSize: '23px', padding: '100px'}}> Settings</StyledBox>}/>
                            <Route path="/notifications" element={<StyledBox css={{
                                textAlign: 'center',
                                fontSize: '23px',
                                padding: '100px'
                            }}> Notifications</StyledBox>}/>
                        </Route>

                </Route>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="*" element={<Navigate to="/home" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
