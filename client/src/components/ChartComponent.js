import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const options = {
  chart: {
    id: "candlestick",
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
};
// const tempData = [{
//     x: new Date(2016, 0, 1),
//     y: [51.98, 56.29, 51.59, 53.85]
//   },
//   {
//     x: new Date(2016, 2, 1),
//     y: [53.66, 54.99, 51.35, 52.95]
//   },
//   {
//     x: new Date(2016, 8, 1),
//     y: [52.76, 57.35, 52.15, 57.03]
//   }]

// date.toLocaleString("en-US", {
//     timeZone: "America/Los_Angeles"
const ChartComponent = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [placeHolder, setPlaceholder] = useState("Loading...");
  const [timeScale, setTimeScale] = useState('7D')
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/quotes/${symbol}/${timeScale}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const chartData = data.reverse().map((dataPoint) => {
          const date = new Date(dataPoint.time_period_start.slice(0, 16));
          return {
            x: date.toLocaleString(),
            y: [
              dataPoint.price_open,
              dataPoint.price_high,
              dataPoint.price_low,
              dataPoint.price_close,
            ],
          };
        });
        setData(chartData);
      })
      .catch((error) => setPlaceholder("Could not Fetch Data"));
  }, [symbol, timeScale]);

  return (
    <div>
      {data ? (
        <div>
          <button onClick={() => setTimeScale('7D')}>7D</button><button onClick={() => setTimeScale('1M')}>1M</button>
          <Chart
            options={options}
            series={[{ data: data }]}
            type="candlestick"
            width="100%"
          />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>{placeHolder}</div>
      )}
    </div>
  );
};

export default ChartComponent;
