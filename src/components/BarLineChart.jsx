import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const BarLineChart = ({ data, chartColor }) => {
    // Sort the data based on the date (labels) in ascending order
    const sortedData = data.labels
        .map((label, index) => ({
            label,
            barData: data.barData[index],
            lineData: data.lineData[index],
        }))
        .sort((a, b) => new Date(a.label) - new Date(b.label)); // Sorting by date

    // Extract sorted data into individual arrays again
    const sortedLabels = sortedData.map(item => item.label);
    const sortedBarData = sortedData.map(item => item.barData);
    const sortedLineData = sortedData.map(item => item.lineData);

    const chartData = {
        labels: sortedLabels,
        datasets: [
            {
                type: 'bar',
                label: 'Transactions',
                data: sortedBarData,
                backgroundColor: chartColor?.bar || '#3f51b5', // Default color if not provided
            },
            {
                type: 'line',
                label: 'Trends',
                data: sortedLineData,
                borderColor: chartColor?.line || '#ff5722', // Default color if not provided
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarLineChart;
