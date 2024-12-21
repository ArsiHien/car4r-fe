import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const RevenueChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const fetchRevenueChart = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/management/revenue/last12months");
                const data = await response.data;
                const labels = data.map((element: { month: string }) => element.month);
                const values = data.map((element: { revenue: number }) => element.revenue);
                console.log("fetch revenue chart done\n");

                const ctx = canvasRef.current?.getContext('2d');
                if (ctx) {
                    if (Chart.getChart(ctx)) {
                        Chart.getChart(ctx)?.destroy();
                    }
                    new Chart(ctx, {
                        type: 'bar', // or 'line', 'pie', etc.
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Revenue',
                                data: values,
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
                            }
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

    return <canvas id="chart" ref={canvasRef} width={400} height={400} className=' max-h-80'/>;
};

export default RevenueChart;