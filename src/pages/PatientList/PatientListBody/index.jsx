import React, {useState} from 'react';
import {TableBody} from '@material-ui/core';
import {StyledBodyCell, StyledBodyRow} from './styles';
import {renderStatusPill,} from '../../../utils/utils';
import {StyledBox, StyledImg} from '../../../common/styledCommonComponents';

const PatientListBody = () => {
	const [body, setBody] = useState([
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Fabrizio Serial',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostata',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
		{
			nHistorial: '2141325213235435',
			nameSurname: 'Agustin VonStaszweski',
			tumor: 'Prostat',
			treatment: 'Quimioterapia',
			treatmentTumor: 'Quimioterapia',
			treatmentTumorPeri: 'Quimioterapia',
			state: 'active',
		},
	]);



	return (
		<TableBody>
			{body.map((bodyItem) => (
				<StyledBodyRow>
					<StyledBodyCell with={'5%'} style={{ paddingLeft: '30px' }}>
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
								<StyledBox
									css={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: '100%',
										width: '100%',
									}}
								>
									{' '}
									{bodyItem.nameSurname
										.split(' ')
										.map((word) => word.charAt(0))
										.slice(0, 2)
										.map((w) => w)}{' '}
								</StyledBox>
							)}
						</StyledBox>
					</StyledBodyCell>
					<StyledBodyCell width={'12%'}>
						{bodyItem.nHistorial}
					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						{bodyItem.nameSurname}
					</StyledBodyCell>
					<StyledBodyCell width={'10%'}>{bodyItem.tumor}</StyledBodyCell>
					<StyledBodyCell width={'26%'}>
						{bodyItem.treatment}
					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						{bodyItem.treatmentTumor}
					</StyledBodyCell>
					<StyledBodyCell width={'14%'}>
						{bodyItem.treatmentTumorPeri}
					</StyledBodyCell>
					<StyledBodyCell width={'5%'} style={{ paddingRight: '30px' }}>
						{renderStatusPill(bodyItem.state)}
					</StyledBodyCell>
				</StyledBodyRow>
			))}
		</TableBody>
	);
};

export default PatientListBody;
