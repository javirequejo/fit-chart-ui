export const groupByMonth = (data) => {
  const groupedData = [];
  const map = new Map();

  data.forEach((item) => {
    const month = item.date.getMonth();
    const year = item.date.getFullYear();
    const key = `${year}-${month}`;

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item.weight);
  });

  map.forEach((values, key) => {
    const [year, month] = key.split('-');
    const date = new Date(year, month);
    const averageWeight = values.reduce((a, b) => a + b, 0) / values.length;
    groupedData.push({ date, weight: parseFloat(averageWeight.toFixed(2)) });
  });

  return groupedData;
};
