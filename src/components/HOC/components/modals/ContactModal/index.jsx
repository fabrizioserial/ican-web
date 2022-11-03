import Modal from '../Modal';
import {
	StyledBox,
	StyledP,
} from '../../../../../common/styledCommonComponents';
import DailyModalIcon from '../../../../../assets/DailyModalIcon';
import { parseDataWithYear } from '../../../../../utils/utils';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useLazyGetPatientDataQuery } from '../../../../../redux/api/patientApi';
import { useTheme } from 'styled-components';

const ContactModal = ({ handleOnClose }) => {
	const reportId = useSelector((state) => state.utilsSlice.reportId);
	const [refetch, { data }] = useLazyGetPatientDataQuery();
	const theme = useTheme();
	useEffect(() => {
		reportId && refetch(reportId);
	}, [reportId]);

	return (
		<Modal
			onClose={handleOnClose}
			header={
				<StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
					<StyledP
						css={{
							fontSize: '20px',
							fontWeight: 600,
						}}
					>
						Datos de contacto
					</StyledP>
				</StyledBox>
			}
			body={
				<StyledBox css={{ padding: '30px' }}>
					<StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
						<StyledP>Telefono: </StyledP>
						<StyledP
							css={{
								marginLeft: '5px',
								fontWeight: 500,
								color: data?.phoneNumber
									? theme.oncoBlack
									: theme.oncoGrey2,
							}}
						>
							{data?.phoneNumber ?? 'No se encontraron resultados'}
						</StyledP>
					</StyledBox>
					<StyledBox
						css={{
							display: 'flex',
							flexDirection: 'row',
							marginTop: '10px',
						}}
					>
						<StyledP>Email: </StyledP>
						<StyledP css={{ marginLeft: '5px', fontWeight: 500 }}>
							{data?.email ?? 'No se encontraron resultados'}
						</StyledP>
					</StyledBox>
				</StyledBox>
			}
		/>
	);
};

export default ContactModal;
