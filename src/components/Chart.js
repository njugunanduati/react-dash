import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    tension: 0.3,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Rent Payments',
        },
    },
};

const labels = [
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1000, 3000, 5000, 6000, 10000, 12000, 10000,1000, 3000, 5000, 6000, 1000 ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


const Chart = () => {


    return (
        <div>
            <h2>Chart</h2>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart;
