import React from 'react';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';

import { useTheme } from 'styled-components';
import Card from '../../../../components/Card';
import PillIcon from '../../../../assets/PillIcon';
import PlusCircleIcon from '../../../../assets/PlusCircleIcon';
import TreatmentItem from './TreatmentItem';

const TreatmentSection = () => {
	const theme = useTheme();
	return (
		<Card
			title={'Tratamientos en Curso'}
			icon={<PillIcon />}
			width={'305px'}
			height={'676px'}
			align={'top'}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
					paddingBottom: '20px',
				}}
			>
				<TreatmentItem
					medications={['Abiraterona (Zytiga)', '', '', '']}
					id={''}
					startedDate={'09/12/2020'}
				/>
				<StyledBox
					css={{
						boxSizing: 'border-box',
						width: '255px',
						height: '31px',
						background: '#FFFFFF',
						border: '1px solid #E1D1FC',
						borderRadius: '20px',
						padding: '7px 62px',
						display: 'flex',
						flexDirection: 'row',
						columnGap: '5px',
						alignItems: 'center',
						cursor: 'pointer',
						'&:hover': {
							boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.3)',
							transition: 'all 0.2s ease-out',
						},
					}}
				>
					<PlusCircleIcon />
					<StyledP
						css={{
							width: '108px',
							height: '13px',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '11px',
							lineHeight: '13px',
							display: 'flex',
							alignItems: 'center',
							letterSpacing: '0.05em',
							textTransform: 'capitalize',
							color: '#AF7EFF',
							whiteSpace: 'nowrap',
						}}
					>
						Nuevo Tratamiento
					</StyledP>
				</StyledBox>
			</StyledBox>
		</Card>
	);
};

export default TreatmentSection;
