import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useCSVData = (csvFile) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      complete: (results) => {
        const parsedData = results.data.map(row => ({
          date: new Date(row.date),
          weight: parseFloat(row.weight)
        }));
        setData(parsedData);
      },
    });
  }, [csvFile]);

  return data;
};

export default useCSVData;
