import React, { useState } from 'react';
import ChartComponent from './components/ChartComponent';
import useCSVData from './hooks/useCSVData';
import './index.css';

const App = () => {
  const [filter, setFilter] = useState('12m');
  const data = useCSVData('/sample.data.csv');

  return (
    <div className="container">
      <div className="options">
        <button onClick={() => setFilter('7d')}>Last 7 days</button>
        <button onClick={() => setFilter('30d')}>Last 30 days</button>
        <button onClick={() => setFilter('12m')}>Last 12 months</button>
        <button onClick={() => setFilter('5y')}>Last 5 years</button>
        <button onClick={() => setFilter('all')}>All</button>
      </div>
      <ChartComponent data={data} filter={filter} />
    </div>
  );
};

export default App;
