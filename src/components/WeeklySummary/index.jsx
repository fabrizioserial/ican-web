import {
	StyledBox,
	StyledCardHome,
	StyledP,
} from '../../common/styledCommonComponents';
import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import TaskContainer from './TaskContainer';
import CheckIcon from '../../assets/CheckIcon';
import TimeIcon from '../../assets/TimeIcon';
import MarkIcon from '../../assets/MarkIcon';
import ReloadIcon from '../../assets/ReloadIcon';
import { useDailySummaryStatisticsQuery } from '../../redux/api/homeApi';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';
import { useFilterPatientQuery } from '../../redux/api/listApi';

const WeeklySummary = () => {
	const theme = useTheme();
	const { data, isLoading, refetch, isFetching } =
		useDailySummaryStatisticsQuery({ status: 'Pending', skip: 0, take: 10 });
	const totalAmount = useMemo(
		() =>
			Object.values(data ?? {})?.reduce((prev, actual) => prev + actual, 0),
		[data],
	);
	const { data: otherComponentData, isLoading: otherComponentLoading } =
		useFilterPatientQuery('status', { value: 'Pending' });
	console.log('hola', otherComponentData);

	return (
		<StyledCardHome
			width={'500px'}
			heigth={'230px'}
			css={{
				width: '740px',
				height: '230px',
				display: 'flex',
				flexDirection: 'column',
				color: theme.oncoBlack,
				padding: '24px 20px',
			}}
			className={
				otherComponentData?.patients?.length === 0 ||
				otherComponentData === undefined ||
				otherComponentLoading
					? ''
					: 'open'
			}
		>
			<StyledBox
				css={{
					height: '24px',
					marginBottom: '16px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<StyledP css={{ color: theme.OncoBlack, fontWeight: 500 }}>
					Encuesta Diaria
				</StyledP>
				<StyledBox css={{ cursor: 'pointer' }} onClick={refetch}>
					<ReloadIcon />
				</StyledBox>
			</StyledBox>
			<StyledBox
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				{isLoading || isFetching ? (
					<StyledCircularProgress size={50} />
				) : (
					<>
						<TaskContainer
							color={'green'}
							title={'Completado'}
							quantity={data.complete}
							progress={(data.complete / totalAmount) * 100}
							icon={CheckIcon}
						/>
						<TaskContainer
							color={'pink'}
							title={'En proceso'}
							quantity={data.incompleted}
							progress={(data.incompleted / totalAmount) * 100}
							icon={TimeIcon}
						/>

						<TaskContainer
							color={'orange'}
							title={'Sin arrancar'}
							quantity={totalAmount}
							progress={(data.empty / totalAmount) * 100}
							icon={MarkIcon}
						/>
					</>
				)}
			</StyledBox>
		</StyledCardHome>
	);
};

export default WeeklySummary;
