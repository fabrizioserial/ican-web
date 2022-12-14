import React, { useRef, useState } from 'react';
import { StyledBox, StyledInput } from '../../../common/styledCommonComponents';
import SearchIcon from '../../../assets/SearchIcon';
import _, { debounce } from 'lodash';
import { useLazyPatientsListWithParamsQuery } from '../../../redux/api/listApi';

const SearchBar = () => {
	const [textToSearch, setTextToSearch] = useState('');
	const [refetch, { data }] = useLazyPatientsListWithParamsQuery();
	const delayedQuery = useRef(
		_.debounce((q) => refetch({ pattern: q }), 1000),
	).current;

	const handleChange = (value) => {
		setTextToSearch(value);
		delayedQuery(value);
	};
	return (
		<StyledBox
			css={{
				height: '40px',
				width: '280px',
				borderRadius: '15px',
				backgroundColor: '#AF7EFF',
				display: 'flex',
				flexDirection: 'row',
				padding: '5px 10px',
				boxSizing: 'border-box',
				alignItems: 'center',
				marginBottom: '20px',
			}}
		>
			<StyledBox css={{ height: '20px', width: '20px' }}>
				<SearchIcon />
			</StyledBox>
			<StyledInput
				placeholder={'Buscar'}
				value={textToSearch}
				css={{
					width: '100%',
					height: '100%',
					boxSizing: 'border-box',
					borderStyle: 'none',
					backgroundColor: 'transparent',
					margin: '0 10px',
					outline: 'none',
					color: 'white',
					fontSize: '14px',
					'&::placeholder': {
						color: 'white',
					},
				}}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</StyledBox>
	);
};

export default SearchBar;
