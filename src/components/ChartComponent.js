import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import { groupByMonth } from '../utils/chart.utils';
import { getChartOptions } from '../config/chart.config';

Chart.register(...registerables, zoomPlugin);

const ChartComponent = ({ data, filter }) => {
  const now = new Date();
  const filteredData = data ? data.filter(d => {
    const timeDiff = now - d.date;
    switch (filter) {
      case '7d':
        return timeDiff <= 7 * 24 * 60 * 60 * 1000;
      case '30d':
        return timeDiff <= 30 * 24 * 60 * 60 * 1000;
      case '12m':
        return timeDiff <= 365 * 24 * 60 * 60 * 1000;
      case '5y':
        return timeDiff <= 5 * 365 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  }) : [];

  const finalData = (filter === '5y' || filter === 'all') ? groupByMonth(filteredData) : filteredData;

  const chartData = {
    labels: finalData.map(d => d.date),
    datasets: [{
      label: 'Weight over time',
      data: finalData.map(d => d.weight),
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      borderWidth: 2,
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }],
  };

  const chartOptions = getChartOptions(filter);

  return (
    <div className="chartContainer">
      <h1>Weight over time</h1>
      {data ? <Line data={chartData} options={chartOptions} /> : <p>Loading...</p>}
    </div>
  );
};

export default ChartComponent;
