import React, { useEffect, useState } from 'react';
import {
	StyledBox,
	StyledH3,
	StyledP,
	StyledScreen,
} from '../../../common/styledCommonComponents';
import HungerAndThirstChart from '../../../components/HungerAndThirstChart';
import SocialAndPhysicalActivitiesChart from '../../../components/SocialAndPhysicalActivitiesChart';
import PatientProfileCard from '../../../components/PatientProfileCard';
import { useNavigate, useParams } from 'react-router';
import { Table, TableContainer } from '@material-ui/core';
import {
	useGetPollResultsQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetCalendarQuery,
	useLazyGetSocialPhysicalQuery,
} from '../../../redux/api/patientApi';
import WeeklySchedule from '../components/WeeklySchedule';
import TreatmentSection from '../components/TreatmentSection';
import PollResultsBody from '../../PollResultsTable/PollResultsBody';
import IconHeartFile from '../../../assets/IconHeartFile';
import { useTheme } from 'styled-components';
import { StyledButtonMore } from '../../../components/PatientsList/PatientContainer/styles';
import ReportComponent from '../components/ReportComponent';

const ProfileScreen = () => {
	const theme = useTheme();
	const { patientId } = useParams();
	const [
		refetchAppetiteHydration,
		{ data: dataAppetiteHydration, isSuccess: isSuccessAppetiteHydration },
	] = useLazyGetAppetiteHydrationQuery();
	const [
		refetchSocialPhysical,
		{ data: dataSocialPhysical, isSuccess: isSuccessSocialPhysical },
	] = useLazyGetSocialPhysicalQuery();
	const [
		refetchCalendar,
		{ data: dataCalendar, isSuccess: isSuccessCalendar },
	] = useLazyGetCalendarQuery();

	const [appetiteHydration, setAppetiteHydration] = useState(undefined);
	const [socialPhysical, setSocialPhysical] = useState(undefined);
	const [calendar, setCalendar] = useState(undefined);

	useEffect(() => {
		refetchAppetiteHydration(patientId);
		refetchSocialPhysical(patientId);
		refetchCalendar(patientId);
	}, []);

	useEffect(() => {
		if (dataAppetiteHydration) {
			let aux = {};
			let day = '';
			Object.values(dataAppetiteHydration).forEach((item) => {
				day =
					new Date(item.date).getDate() +
					'/' +
					new Date(item.date).getMonth();
				aux[day] = [item.apettite, item.hydration];
			});
			setAppetiteHydration(aux);
		}
	}, [isSuccessAppetiteHydration]);

	useEffect(() => {
		if (dataSocialPhysical) {
			let aux = {};
			let day = '';
			Object.values(dataSocialPhysical).forEach((item) => {
				day =
					new Date(item.date).getDate() +
					'/' +
					new Date(item.date).getMonth();
				aux[day] = [item.social, item.physical];
			});
			setSocialPhysical(aux);
		}
	}, [isSuccessSocialPhysical]);

	const dayName = (day) => {
		switch (day) {
			case 0:
				return 'L';
			case 1:
				return 'M';
			case 2:
				return 'M';
			case 3:
				return 'J';
			case 4:
				return 'V';
			case 5:
				return 'S';
			case 6:
				return 'D';
			default:
				break;
		}
	};
	const dayState = (status) => {
		switch (status) {
			case 'daily':
				return {
					state: 'daily',
					detail: 'Completo la encuesta diaria',
				};
			case 'weekly':
				return {
					state: 'weekly',
					detail: 'Completo la encuesta semanal',
				};
			default:
				return {
					state: 'grey',
					detail: 'Nada para reportar',
				};
		}
	};

	useEffect(() => {
		if (dataCalendar) {
			let aux = [];
			Object.values(dataCalendar).forEach((item) => {
				aux.push({
					id: item?.dailyId || item?.weeklyId,
					dayNumber: new Date(item.date).getUTCDate(),
					dayName: dayName(new Date(item.date).getUTCDay()),
					state: dayState(
						item?.dailyStatus === 'Completed'
							? 'daily'
							: item?.weeklyStatus === 'Completed'
							? 'weekly'
							: 'nothing',
					).state,
					detail: dayState(
						item?.dailyStatus === 'Completed'
							? 'daily'
							: item?.weeklyStatus === 'Completed'
							? 'weekly'
							: 'nothing',
					).detail,
				});
			});
			setCalendar(aux);
		}
	}, [isSuccessCalendar]);

	return (
		<StyledScreen
			css={{
				display: 'flex',
				flexDirection: 'row',
				padding: '30px',
				justifyContent: 'center',
			}}
		>
			<StyledBox
				css={{
					flexDirection: 'column',
				}}
			>
				<PatientProfileCard />
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
						columnGap: 30,
					}}
				>
					<HungerAndThirstChart data={appetiteHydration} />
					<SocialAndPhysicalActivitiesChart data={socialPhysical} />
				</StyledBox>
				<ReportComponent />
			</StyledBox>
			<StyledBox
				css={{
					paddingLeft: '30px',
					display: 'flex',
					flexDirection: 'column',
					flexWrap: 'wrap',
				}}
			>
				<WeeklySchedule dayList={calendar} />
				<TreatmentSection />
			</StyledBox>
		</StyledScreen>
	);
};

export default ProfileScreen;
