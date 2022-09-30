import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './pages/routes/ProtectedRoute';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './componenets/Navbar';

const App = () => {
	const accessToken = useSelector((state) => state.authSlice.accessToken);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route element={<ProtectedRoute accessToken={accessToken} />}>
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/statistics" element={<div> statistics</div>} />
					<Route path="/my-patients" element={<div> my patients</div>} />
				</Route>
				<Route path="/login" element={<LoginScreen />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
