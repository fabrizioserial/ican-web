import React from 'react';
import { StyledBox, StyledInput } from '../../../common/styledCommonComponents';
import SearchIcon from '../../../assets/SearchIcon';

const SearchBar = () => {
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
				}}
			/>
		</StyledBox>
	);
};

export default SearchBar;
