import React, { useEffect, useState } from 'react';
import DailyIcon from '../../../assets/DailyIcon';
import WeeklyIcon from '../../../assets/WeeklyIcon';
import { StyledBox } from '../../../common/styledCommonComponents';
import {
	backgroundColorStatus,
	ModalTypeEnum,
	parseData,
	renderPollPill,
	renderStatusPill,
	textColorStatus,
} from '../../../utils/utils';
import TableBody from '@material-ui/core/TableBody';
import {
	StyledBodyCell,
	StyledBodyRow, StyledCellP,
} from '../../PatientList/PatientListBody/styles';
import { useDispatch } from 'react-redux';
import { setModalOpen, setReportId } from '../../../redux/slices/utilsSlice';

const PollResultsBody = ({ data }) => {
	const [page,setPage]=useState(1)
	const dispatch = useDispatch();

	const openModal = (id, type) => {
		dispatch(
			setModalOpen({
				open: true,
				type:
					type === 'daily'
						? ModalTypeEnum.DAILY_MODAL
						: ModalTypeEnum.WEEKLY_MODAL,
				id: id,
			}),
		);
	};

	const getIcon = (type) => {
		if (type === 'daily') return <DailyIcon />;
		else return <WeeklyIcon />;
	};

	function getPage(page) {
		return data?.slice(page-1,page*2)

	}

	return (
		<TableBody>
			{getPage(page).map((bodyItem, index) => (
				<StyledBodyRow
					key={index}
					onClick={() => openModal(bodyItem.id, bodyItem.type)}
				>
					<StyledBodyCell with={'20%'} style={{ paddingLeft: '30px' }}>
						{getIcon(bodyItem.type)}
					</StyledBodyCell>

					<StyledBodyCell width={'90%'}>
						<StyledCellP>{parseData(bodyItem.date)}
						</StyledCellP>

					</StyledBodyCell>
					<StyledBodyCell width={'10%'}>
						{renderPollPill(bodyItem.status)}
					</StyledBodyCell>
				</StyledBodyRow>
			))}
		</TableBody>
	);
};

export default PollResultsBody;
