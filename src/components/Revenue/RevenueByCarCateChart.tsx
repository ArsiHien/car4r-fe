import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const RevenueByCarCateChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchRevenueByCateChart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/management/revenue/by-category-type"
        );
        const data = await response.data;
        const labels = data.map(
          (element: { categoryType: string }) => element.categoryType
        );
        const values = data.map(
          (element: { revenue: number }) => element.revenue
        );
        console.log("fetch chart done\n");
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          if (Chart.getChart(ctx)) {
            Chart.getChart(ctx)?.destroy();
          }
          new Chart(ctx, {
            type: "bar", // or 'line', 'pie', etc.
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Revenue",
                  data: values,
                  backgroundColor: "rgba(75, 192, 192, 1)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              indexAxis: "x",
              plugins: {
                title: {
                  display: true,
                  text: "Revenue By Car Category",
                  font: {
                    size: 18,
                  },
                },
              },
            },
          });
          console.log("chart done\n");
        }
      } catch (error) {
        console.error("Error fetching revenue:", error);
      }
    };
    fetchRevenueByCateChart();
  }, []);

  return (
    <canvas
      id="chart"
      ref={canvasRef}
      width={400}
      height={400}
      className="max-w-80 max-h-80 "
    />
  );
};

export default RevenueByCarCateChart;
