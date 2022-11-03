import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router';
import { ProtectedRoute } from './pages/routes/ProtectedRoute';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { StyledBox } from './common/styledCommonComponents';

import Validation from './pages/Validation';
import ProfileScreen from './pages/PatientProfile/ProfileScreen';
import Wrapper from './components/Navbar/Wrapper';
import PatientListScreen from './pages/PatientList/PatientListScreen';
import { withModal } from './components/HOC/withModal';
import PollResultsScreen from './pages/PollResultsTable';
import StatisticsScreen from './pages/Statistics/StatisticsScreen';

const App = () => {
	const accessToken = useSelector((state) => state.authSlice.accessToken);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute accessToken={accessToken} />}>
					<Route element={<Wrapper />}>
						<Route path="/home" exact element={<HomeScreen />} />
						<Route path="/my-patients" element={<PatientListScreen />} />
						<Route
							path="/poll-results/:patientId"
							element={<PollResultsScreen />}
						/>
						<Route
							path="/settings"
							element={
								<StyledBox
									css={{
										textAlign: 'center',
										fontSize: '23px',
										padding: '100px',
									}}
								>
									{' '}
									Settings
								</StyledBox>
							}
						/>

						<Route
							path={'/profile/:patientId'}
							element={<ProfileScreen />}
						/>
						<Route
							path="/validate-patient/:patientId"
							element={<Validation />}
						/>
					</Route>
				</Route>
				<Route path="/login" element={<LoginScreen />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default withModal(App);
