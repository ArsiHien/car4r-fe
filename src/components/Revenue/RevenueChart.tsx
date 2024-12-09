import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const RevenueChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            if (Chart.getChart(ctx)) {
                Chart.getChart(ctx)?.destroy();
            }
            new Chart(ctx, {
                type: 'bar', // or 'line', 'pie', etc.
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Revenue',
                        data: [65, 59, 80, 81, 56, 55, 40],
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
        }
    }, []);

    return <canvas id="chart" ref={canvasRef} width={400} height={400} className=' max-h-80'/>;
};

export default RevenueChart;