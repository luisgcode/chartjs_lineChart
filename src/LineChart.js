import React from "react";
import { Line } from "react-chartjs-2";
import "./linechart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  Ticks,
} from "chart.js";
import { data_base } from "./DATA_GRAPH";
import { color } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {};
  const options = {
    scales: {
      // Cambios en el eje x
      x: {
        // Ticks son los ejes
        ticks: {
          showLabelBackdrop: true,
          // El color de la informacion en eje x
          color: "gray",
          //   Texto
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          //   Texto
          font: {
            weight: "bold",
          },
          // El color de la informacion en eje Y
          color: "black",
        },
      },
    },
  };
  return (
    <div>
      <div className="graph-container">
        <h2>
          Number of calls received in SAC, with the number of calls solved by{" "}
          <br />
          the Customer service Team.
        </h2>

        <div className="graph-wrapper">
          <Line className="thegraph" data={data_base} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
