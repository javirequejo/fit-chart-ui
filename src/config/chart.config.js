export const getChartOptions = (filter) => ({
  scales: {
    x: {
      type: 'time',
      time: {
        unit: filter === '7d' ? 'day' : filter === '30d' ? 'day' : 'month',
        tooltipFormat: filter === '7d' || filter === '30d' ? 'MMM d, yyyy' : 'MMM yyyy',
      },
      title: {
        display: true,
        text: 'Date',
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 10
      }
    },
    y: {
      title: {
        display: true,
        text: 'Weight (kg)',
      },
    },
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: 'x',
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => `Weight: ${context.raw} kg`,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
    },
  },
});
