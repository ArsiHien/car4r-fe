import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const RatingChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const fetchRevenueChart = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/management/reviews/rating");
                const data = await response.data;
                const array: number[] = [];
                array[0] = data.one;
                array[1] = data.two;
                array[2] = data.three;
                array[3] = data.four;
                array[4] = data.five;
                console.log(array);
                console.log("fetch rating chart done\n");
                const ctx = canvasRef.current?.getContext('2d');
                if (ctx) {
                    if (Chart.getChart(ctx)) {
                        Chart.getChart(ctx)?.destroy();
                    }
                    new Chart(ctx, {
                        type: 'pie', // or 'line', 'pie', etc.
                        data: {
                            labels: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
                            datasets: [{
                                label: 'Rating',
                                data: [array[0], array[1], array[2], array[3], array[4]],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.8)',
                                    'rgba(255, 159, 64, 0.8)',
                                    'rgba(255, 205, 86, 0.8)',
                                    'rgba(75, 192, 192, 0.8)',
                                    'rgba(54, 162, 235, 0.8)',
                                    'rgba(153, 102, 255, 0.8)',
                                    'rgba(201, 203, 207, 0.8)'
                                ],
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            indexAxis: 'y'
                        }
                    });
                    console.log("chart done\n");
                }
            } catch (error) {
                console.error("Error fetching revenue:", error);
            }
        }
        fetchRevenueChart();
    }, []);

    return <canvas id="chart" ref={canvasRef} width={400} height={400} className='max-w-80 max-h-80 ' />;
};

export default RatingChart;