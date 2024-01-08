import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
    const labels = [20,22,25,27,30,32,35,37,40,45,50,55,60,65];
    const data = {
        labels: labels,
        datasets: [
            {
                barPercentage: 0.45,
                label: 'Dataset 1',
                data: [20,20,30,40,50,60,60,70,80,90,100,120,100],
                backgroundColor: '#00308F',
            },
            {
                barPercentage: 0.45,
                label: 'Dataset 2',
                data: [20,30,30,40,40,70,60,70,60,100,90,80,110],
                backgroundColor: '#318CE7',
            },
            {
                barPercentage: 0.45,
                label: 'Dataset 3',
                data: [30,30,40,40,60,30,50,50,80,50,60,70,90],
                backgroundColor: '#7CB9E8',
            },
        ]
    };
  
    const config = {
        type: 'bar',
        data: data,
        options: {
            aspectRatio: 3,
            plugins: {
                title: {
                    display: true,
                },
            },
            responsive: true,
            scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 7,
                    font: {
                        size: 14,
                        weight:'bold'
                    }
                }
            },
            y: {
                stacked: true,
                suggestedMin: 0,
                suggestedMax: 300,
                border:{
                    dash:[8,4]
                },
                ticks: {
                    maxTicksLimit: 4,
                    callback: function (value) {
                        return '$' + value;
                    },
                    font: {
                        size: 16,
                        weight:'bold'
                    },
                }
            }
            },
            }
        };
        
  return (
    <><Bar data={config.data} options={config.options}/></>
  );
}

export default BarChart;