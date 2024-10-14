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
  const data = [];
  const options = [];
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
