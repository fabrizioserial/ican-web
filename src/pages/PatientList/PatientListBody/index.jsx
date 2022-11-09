import React, { useState } from 'react';
import { TableBody } from '@material-ui/core';
import { StyledBodyCell, StyledBodyRow, StyledCellP } from './styles';
import {
	CapitalizeText,
	getProfileImageFromName,
	renderStatusPill,
} from '../../../utils/utils';
import { StyledBox, StyledImg } from '../../../common/styledCommonComponents';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PatientListBody = () => {
	const navigate = useNavigate();

	const patients = useSelector((state) => state.listSlice.patientList);

	return (
		<TableBody>
			{patients.map((bodyItem) => (
				<StyledBodyRow onClick={() => navigate(`/profile/${bodyItem.id}`)}>
					<StyledBodyCell width={'5%'} style={{ paddingLeft: '30px' }}>
						<StyledBox
							css={{
								height: '34px',
								width: '34px',
								border: '1px solid #E4E4E4',
								borderRadius: '50%',
							}}
						>
							{bodyItem.url ? (
								<StyledImg src={bodyItem.url} />
							) : (
								getProfileImageFromName(
									CapitalizeText(bodyItem.name),
									CapitalizeText(bodyItem.surname),
									{ width: 34, height: 34 },
								)
							)}
						</StyledBox>
					</StyledBodyCell>
					<StyledBodyCell width={'12%'}>
						<StyledCellP>{bodyItem.medicHistoryNumber}</StyledCellP>
					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						<StyledCellP>	{CapitalizeText(bodyItem.name) +
						' ' +
						CapitalizeText(bodyItem.surname)}</StyledCellP>

					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						<StyledCellP>{bodyItem.dni}</StyledCellP>
					</StyledBodyCell>

					<StyledBodyCell width={'10%'}>
						<StyledCellP>
							{CapitalizeText(bodyItem.organ)}
						</StyledCellP>
					</StyledBodyCell>
					<StyledBodyCell width={'26%'}>
						<StyledCellP>
							{bodyItem.treatment}
						</StyledCellP>

					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						<StyledCellP>
							{CapitalizeText(bodyItem.tumorTreatment)}
						</StyledCellP>

					</StyledBodyCell>

					<StyledBodyCell width={'5%'} style={{ paddingRight: '30px' }}>
						{renderStatusPill(bodyItem.status)}
					</StyledBodyCell>
				</StyledBodyRow>
			))}
		</TableBody>
	);
};

export default PatientListBody;
