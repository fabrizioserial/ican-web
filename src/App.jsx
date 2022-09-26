import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './pages/routes/ProtectedRoute';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate } from 'react-router-dom';

const App = () => {
	const accessToken = useSelector((state) => state.authSlice.accessToken);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute accessToken={accessToken} />}>
					<Route path="/home" element={<HomeScreen />} />
				</Route>
				<Route path="/login" element={<LoginScreen />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
