import React from 'react'
import Chart from 'react-apexcharts'
import { useTheme } from 'styled-components';
import './styles.css'

const DonutChart = () => {
    const series = [23, 11, 54, 23, 11, 54, 10]

    const options = {
        labels: ["Mamas", "Colon", "Prostata", "Pulmon", "Cervix", "Estomago", "Otros"],
        colors: ['#80A2F9', '#86D3A5', '#E1B1EE', '#CDAFFF', '#ECA485', '#BBE5CC', '#DC91F0'],
        dataLabels: {
            enabled: false,
        },
        chart: {
            background: '#fff',
        },
        legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'right',
            horizontalAlign: 'center',
            fontSize: '11px',
            itemMargin: {
                vertical: 4
            },
            onItemHover: {
                highlightDataSeries: true
            },
            markers: {
                width: 6,
                height: 6,
                radius: 12,
                offsetX: -5,
                offsetY: -1
            },
        },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
            marker: {
                show: false,
            },
        },
        plotOptions: {
            pie: {
                offsetY: 10,
                customScale: 0.8,
                donut: {
                    size: '70%'
                }
            }
        }
    }

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" />
        </div>
    )
}

export default DonutChart