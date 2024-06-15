import React from "react";
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
import { Diagnosis, Patient } from "@/types/Patient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  selectedPatient: Patient | null;
}

// Helper function to abbreviate month names
const abbreviateMonthName = (fullMonthName: string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].indexOf(fullMonthName);
  return monthNames[monthIndex];
};

const LineChart: React.FC<LineChartProps> = ({ selectedPatient }) => {
  if (!selectedPatient || !selectedPatient.diagnosis_history.length) {
    return <div>No data available.</div>;
  }

  const diagnosisHistory = selectedPatient.diagnosis_history;
  // Shorten month names and exclude year
  const labels = diagnosisHistory.map(
    (entry: Diagnosis) => `${abbreviateMonthName(entry.month)}, ${entry.year}`
  );

  const filteredHistory = diagnosisHistory.filter(
    (entry: Diagnosis) => entry.blood_pressure !== undefined
  );
  const systolicValues = filteredHistory.map(
    (entry: Diagnosis) => entry.blood_pressure!.systolic.value
  );
  const diastolicValues = filteredHistory.map(
    (entry: Diagnosis) => entry.blood_pressure!.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        fill: true,
        borderColor: "#D946EE",
        tension: 0.4, // Smooth lines
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        fill: false,
        borderColor: "#6366F1",
        tension: 0.4, // Smooth lines
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 10, // Adjust this value to change the step size on the Y-axis
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
