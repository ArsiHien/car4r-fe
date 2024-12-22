import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const RatingChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchRevenueChart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/management/reviews/rating"
        );
        const data = await response.data;
        const array: number[] = [];
        array[0] = data.one;
        array[1] = data.two;
        array[2] = data.three;
        array[3] = data.four;
        array[4] = data.five;

        const chartData = {
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {
              label: "Rating",
              data: [array[0], array[1], array[2], array[3], array[4]],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(255, 205, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(54, 162, 235, 0.8)",
              ],
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching revenue:", error);
      }
    };
    fetchRevenueChart();
  }, []);

  return (
    <div className="flex w-full items-end justify-between">
      {chartData && (
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                // display: false,
                position: "right",
                labels: {
                  usePointStyle: true,
                },
              },
              title: {
                display: true,
                text: "Ratting star",
                font: {
                  size: 14,
                },
                padding: {
                  top: 0,
                  bottom: 0,
                },
                position: "top",
              },
            },
            layout: {
              padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default RatingChart;
