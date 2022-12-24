import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartCompo = () => {
  const labels = ["January", "February", "March", "April", "May"];
  const options = {
    responsive: true,
    plugins: {
      e: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Ahmed",
        data: [250, 270, 300, 350, 400],
        backgroundColor: "#FD8A8A",
      },
      {
        label: "Karim",
        data: [150, 170, 200, 250, 300],
        backgroundColor: "#FFDB89",
      },
      {
        label: "Mohamed",
        data: [350, 390, 400, 450, 450],
        backgroundColor: "#9EA1D4",
      },
      {
        label: "Mahmoud",
        data: [170, 190, 200, 200, 250],
        backgroundColor: "#AD8E70",
      },
      {
        label: "Petar",
        data: [350, 350, 400, 450, 500],
        backgroundColor: "#A8D1D1",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default ChartCompo;
