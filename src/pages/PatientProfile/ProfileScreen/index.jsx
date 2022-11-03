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
import { useParams } from 'react-router';
import { Table, TableContainer } from '@material-ui/core';
import {
	useGetPollResultsQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetCalendarQuery,
	useLazyGetSocialPhysicalQuery,
} from '../../../redux/api/patientApi';
import WeeklySchedule from '../components/WeeklySchedule';
import TreatmentSection from '../components/TreatmentSection';
import PollResultsHeader from '../../PollResultsTable/PollResultsHeader';
import PollResultsBody from '../../PollResultsTable/PollResultsBody';
import IconHeartFile from '../../../assets/IconHeartFile';
import { useTheme } from 'styled-components';
import { borderBottomColor } from '@mui/system';
import { StyledButtonMore } from '../../../components/PatientsList/PatientContainer/styles';

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


	const { data: dataPollResults, isSuccess: isSuccessPollResults } = useGetPollResultsQuery(patientId);

	const [pollResults, setPollResults] = useState(undefined);

	useEffect(() => {
		console.log(dataPollResults)
		if (dataPollResults) {
			let finalArray = [];
			finalArray = finalArray.concat(
				dataPollResults.reports.dailyReports.map((item) => ({
					...item,
					type: 'daily',
				})),

				dataPollResults.reports.weeklyReports
					.map((item) => ({
						id: item.id,
						status: item.status,
						date: item.endDate,
						type: 'weekly',
					}))
					.filter((item) => item.id),
			);
			finalArray = _.orderBy(finalArray, 'date', 'desc');
			console.log(" final", finalArray)
			setPollResults(finalArray);
		}
	}, [dataPollResults, isSuccessPollResults]);

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
			case 'Completed':
				return {
					state: 'green',
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
					state: dayState(item.weeklyStatus).state,
					detail: dayState(item.weeklyStatus).detail,
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
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '30px',
						columnGap: 30,
					}}
					as={TableContainer}
				>
					<StyledBox
						css={{ width: '100%', }}
					>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
								height: '50px',
								minHeight: '50px',
								paddingTop: 0,
								alignItems: 'center',
								paddingLeft: 25,
								backgroundColor: '#fff',
								borderBottom: '1px solid',
								borderBottomColor: theme.itemBackground,
								borderRadius: '20px 20px 0px 0px'

							}}
						>
							<IconHeartFile />
							<StyledH3
								css={{
									color: theme.OncoPurple,
									margin: '0 0 0 10px',
									textAlign: 'left',
									fontSize: '1rem',
									fontWeight: 'normal',
								}}
							>
								Últimos reportes
							</StyledH3>
						</StyledBox>
						<Table>
							{pollResults.length > 0 ? <PollResultsBody data={pollResults} />
								:
								<StyledBox
									css={{
										height: 200,
										backgroundColor: '#fff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<StyledP css={{ color: theme.oncoGrey2 }}>
										No se encontraron registros
									</StyledP>
								</StyledBox>}
						</Table>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
								height: '50px',
								minHeight: '50px',
								paddingTop: 0,
								alignItems: 'center',
								justifyContent: 'center',
								padding: "10px 25px",
								backgroundColor: '#fff',
								borderBottom: '1px solid',
								borderBottomColor: theme.itemBackground,
								borderRadius: '0px 0px 20px 20px'

							}}
						>
							{/* {data?.patients?.length > 9 && ( */}
							<StyledButtonMore onClick={() => console.log('asd')}>
								Ver más
							</StyledButtonMore>
							{/* )} */}
						</StyledBox>
					</StyledBox>
				</StyledBox>
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
		</StyledScreen >
	);
};

export default ProfileScreen;
