import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let dataPointValues = props.dataPoints.map((e) => e.value);

  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
