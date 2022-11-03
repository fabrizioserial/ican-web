import React, { useEffect, useState } from 'react';
import {
	StyledBox,
	StyledP,
} from '../../../../../../common/styledCommonComponents';
import WeeklyIcon from '../../../../../../assets/WeeklyIcon';
import MoodIcon from '../../../../../../assets/MoodIcon';
import PainIcon from '../../../../../../assets/PainIcon';
import ApetiteIcon from '../../../../../../assets/ApetiteIcon';
import HidrationIcon from '../../../../../../assets/HidrationIcon';
import SocialActivityIcon from '../../../../../../assets/SocialActivityIcon';
import { useSelector } from 'react-redux';
import { useGetDailyReportQuery } from '../../../../../../redux/api/patientApi';
import _ from 'lodash';
import { useTheme } from 'styled-components';

const DailyBody = () => {
	const theme = useTheme();

	const reportId = useSelector((state) => state.utilsSlice.reportId);
	const { data } = useGetDailyReportQuery(reportId);

	const answersTranslation = {
		apetito: ['Menos de lo normal', 'Normal', 'Mas de lo normal'],
		hidratación: ['Menos de 1lt', 'Entre 1lt y 2lts', 'Más de 2 lts'],
		'actividad física': [
			'No hice actividad física',
			'Menos de 30min.',
			'Entre 30min y 1h',
			'Más 1h',
		],
		'actividad social': [
			'No vi a nadie',
			'Limitado a pocas interacciones',
			'Vi a amigos o conocidos por más de 1h',
			'Vi a amigos o conocidos por más de 2h',
		],
	};

	const [daily, setDaily] = useState([
		{
			category: 'Animo',
			questionType: 'ánimo',
			icon: <MoodIcon />,
		},
		{
			category: 'Dolor',
			questionType: 'dolor',
			icon: <PainIcon />,
		},
		{
			category: 'Apetito',
			questionType: 'apetito',
			icon: <ApetiteIcon />,
		},
		{
			category: 'Hidratación',
			questionType: 'hidratación',
			icon: <HidrationIcon />,
		},
		{
			category: 'Actividad Fisica',
			questionType: 'actividad física',
			icon: <SocialActivityIcon />,
		},
		{
			category: 'Actividad Social',
			questionType: 'actividad social',
			icon: <SocialActivityIcon />,
		},
	]);

	const TransformAnswers = (questionType, value) => {
		if (!value) return value;
		switch (questionType) {
			case 'ánimo':
			case 'dolor':
				return `${value} de 10`;
			case 'apetito':
				return answersTranslation.apetito[value];
			case 'hidratación':
				return answersTranslation.hidratación[value];
			case 'actividad física':
				return answersTranslation['actividad física'][value];
			case 'actividad social':
				return answersTranslation['actividad social'][value];
		}
	};

	useEffect(() => {
		if (data?.answers !== undefined) {
			const merged = _.merge(
				_.keyBy(daily, 'questionType'),
				_.keyBy(data.answers, 'questionType'),
			);
			setDaily(
				Object.values(merged)?.map((report) => ({
					...report,
					answer: TransformAnswers(report.questionType, report.answer),
				})),
			);
		}
	}, [data]);

	return (
		<StyledBox css={{ padding: '30px 30px 40px' }}>
			{daily.map((item) => (
				<StyledBox
					css={{
						boxSizing: 'border-box',
						width: '786px',
						height: '60px',
						borderBottom: '1px solid #DEDEDE',
						display: 'flex',
						flexDirection: 'row',
						columnGap: '136px',
						justifyContent: 'space-between',
					}}
				>
					<StyledBox
						css={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<StyledBox css={{ marginTop: '14px' }}>{item.icon}</StyledBox>
						<StyledBox>
							<StyledP
								css={{
									fontStyle: 'normal',
									fontWeight: 500,
									fontSize: '20px',
									lineHeight: '24px',
									display: 'flex',
									alignItems: 'center',
									marginLeft: '10px',
									color: '#333333',
									marginTop: '16px',
								}}
							>
								{item.category}{' '}
							</StyledP>
						</StyledBox>
					</StyledBox>
					<StyledBox>
						{' '}
						<StyledP
							css={{
								fontStyle: 'normal',
								fontWeight: 400,
								fontSize: '20px',
								lineHeight: '24px',
								display: 'flex',
								alignItems: 'center',
								color: item.answer ? theme.OncoPurple : theme.oncoGrey2,
								marginTop: '16px',
								justifyContent: 'flex-end',
							}}
						>
							{item.answer ?? 'No se registró respuesta'}
						</StyledP>
					</StyledBox>
				</StyledBox>
			))}
		</StyledBox>
	);
};

export default DailyBody;
