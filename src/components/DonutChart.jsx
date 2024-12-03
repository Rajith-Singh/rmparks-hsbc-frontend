import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data, chartColor }) => {
    const chartData = {
        labels: ['Credit', 'Debit'],
        datasets: [
            {
                data: [data.credit, data.debit],
                backgroundColor: [
                    chartColor?.credit || '#4CAF50', // Default color if not provided
                    chartColor?.debit || '#F44336', // Default color if not provided
                ],
                hoverBackgroundColor: [
                    chartColor?.creditHover || '#66BB6A',
                    chartColor?.debitHover || '#E57373',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    return <Doughnut data={chartData} options={options} />;
};

export default DonutChart;
