"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Systolic",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      borderColor: "#D946EE",
    },
    {
      label: "Diastolic",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#6366F1",
    },
  ],
};
export default function LineChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}
