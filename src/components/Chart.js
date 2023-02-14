import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// example https://react-chartjs-2.js.org/examples/vertical-bar-chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// chart configuration
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Evaluations",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 0.5,
      },
      grid: {
        display: false,
      },
    },
  },
};

// average difficulty per assignment

function getDifficulty(data, labels) {
  return labels.map((assignment) => {
    let count = 0;
    const difficulty = data.reduce(function (acc, item) {
      if (item.assignment === assignment) {
        count += 1;
        return acc + item.difficulty;
      }
      return acc;
    }, 0);

    return difficulty / count;
  });
}

// average fun per assignment

function getFun(data, labels) {
  return labels.map((assignment) => {
    let count = 0;
    const fun = data.reduce(function (acc, item) {
      if (item.assignment === assignment) {
        count += 1;
        return acc + item.funFactor;
      }
      return acc;
    }, 0);

    return fun / count;
  });
}

function Chart({ data, filter }) {
  const labels = data.reduce(function (acc, item) {
    if (!acc.includes(item.assignment)) {
      acc.push(item.assignment);
    }
    return acc;
  }, []);

  const dataset = {
    labels,
    datasets: [
      // learned at https://masteringjs.io/tutorials/fundamentals/add-object-to-array-conditionally

      ...(["all", "difficulty"].includes(filter)
        ? [
            {
              label: "Difficulty",
              data: getDifficulty(data, labels),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ]
        : []),
      ...(["all", "fun"].includes(filter)
        ? [
            {
              label: "Fun",
              data: getFun(data, labels),
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ]
        : []),
    ],
  };

  return <Bar options={options} data={dataset} />;
}

export default Chart;
