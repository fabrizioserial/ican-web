import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';
import ExclamamtionIcon from '../../assets/ExclamamtionIcon';
import { StyledBox, StyledH3 } from '../../common/styledCommonComponents';
import { DailyColumnChartConfig } from '../../utils/chartsConfigs';
import Card from '../Card';

const DailyColumnChart = ({ data }) => {
	const options = useMemo(
		() => DailyColumnChartConfig(data.data),
		[data.data],
	);
	const height = '90%';

	return (
		<Card
			title={'Tasa de respuesta en la Encuesta diaria'}
			icon={<ExclamamtionIcon />}
			width="100%"
			height="268px"
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					height: height,
				}}
			>
				<StyledBox
					css={{
						flex: 0.1,
						padding: 15,
						display: 'flex',
						justifyContent: 'space-around',
					}}
				>
					<StyledBox
						css={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							paddingRight: 7,
						}}
					>
						<StyledH3
							css={{
								margin: '0 0 0 10px',
								textAlign: 'left',
								fontSize: '10px',
								fontWeight: 'normal',
								// width: '100%'
							}}
						>
							Pacientes
						</StyledH3>
						<StyledH3
							css={{
								// width: '100%',
								margin: '0 0 0 10px',
								textAlign: 'left',
								fontSize: '10px',
								fontWeight: 'normal',
							}}
						>
							{data.mounth}
						</StyledH3>
					</StyledBox>
					<StyledBox
						css={{
							height: '80%',
							width: 1,
							backgroundColor: '#949494',
						}}
					/>
				</StyledBox>
				<StyledBox css={{ flex: 0.9, paddingRight: 15, paddingBottom: 15 }}>
					<Chart
						options={options.options}
						series={options.series}
						type="bar"
						height={'100%'}
						width="100%"
					/>
				</StyledBox>
			</StyledBox>
			{/* <StyledBox
                css={{
                    display: "flex",
                    flexDirection: "row",
                    // width: "100%",
                    paddingLeft: 20
                }}
            >
                <StyledBox css={{
                    // height: height,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingRight: 7,
                    flex: 0.1
                }} >
                    <StyledH3
                        css={{
                            margin: '0 0 0 10px',
                            textAlign: 'left',
                            fontSize: '10px',
                            fontWeight: 'normal',
                            // width: '100%'
                        }}
                    >
                        Pacientes
                    </StyledH3>
                    <StyledH3
                        css={{
                            // width: '100%',
                            margin: '0 0 0 10px',
                            textAlign: 'left',
                            fontSize: '10px',
                            fontWeight: 'normal',
                        }}
                    >
                        {month}
                    </StyledH3>
                </StyledBox>
                <StyledBox css={{
                    // height: height,
                    width: 1,
                    backgroundColor: '#E1D1FC',
                }} />
                <StyledBox
                    css={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 0.8 }}
                >
                    <Chart
                        options={options.options}
                        series={options.series}
                        type="bar"
                        // height={180}
                        width='100%'
                    />
                </StyledBox>
            </StyledBox> */}
		</Card>
	);
};

export default DailyColumnChart;
