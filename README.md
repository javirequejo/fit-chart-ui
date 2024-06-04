# FitChart

FitChart is a web application designed to help you track and visualize weight changes over time. Using this app, you can import CSV files containing weight data and generate interactive charts to monitor progress.

## Features

- Import weight data from a CSV file.
- Interactive charts to visualize weight changes.
- Filter views by period.
- Zoom and pan functionality for detailed data inspection.

## Installation

Follow these steps to set up and run the FitChart application locally.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Clone the Repository

```sh
git clone https://github.com/javirequejo/fit-chart-ui.git
cd fit-chart-ui
```

### Install Dependencies

```sh
npm install
```

### Import CSV Data

1. Place your CSV file in the `public` folder and name it `sample.data.csv`.
2. Ensure your CSV file follows the structure:
   ```csv
   date,weight
   2021-01-01,88.0
   2021-01-08,88.5
   ...
   ```

### Running the Application

To start the application locally, run:

```sh
npm start
```

This will start the development server and open the application in your default web browser.

### Build for Production

To build the application for production, run:

```sh
npm run build
```

This will create a `build` folder containing the production-ready files.

## Project Structure

Here's an overview of the project's folder structure:

```
fit-chart-ui/
  ├── public/
  │   └── sample.data.csv
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   └── ChartComponent.js
  │   ├── config/
  │   │   └── chart.config.js
  │   ├── hooks/
  │   │   └── useCSVData.js
  │   ├── utils/
  │   │   └── chart.utils.js
  │   ├── App.js
  │   ├── index.css
  │   └── index.js
  ├── package.json
  └── README.md
```

## Usage

1. Start the application.
2. Navigate to the options panel on the left to filter the data view by different time periods.
3. The chart will display weight data over time, providing a visual representation of weight changes.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
