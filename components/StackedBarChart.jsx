import { Bar } from "react-chartjs-2"

const data = {
  labels: [
    "1 Jun",
    "2 Jun",
    "3 Jun",
    "4 Jun",
    "5 Jun",
    "6 Jun",
    "7 Jun",
    "8 Jun",
    "9 Jun",
    "10 Jun",
    "11 Jun",
    "12 Jun",
    "13 Jun",
    "14 Jun",
  ],
  datasets: [
    {
      label: "PDAM",
      data: [82, 71, 82.5, 80, 78, 76.5, 61, 58.5, 74, 82.5, 82, 76, 81, 84],
      fill: true,
      backgroundColor: "red",
    },
    {
      label: "Keran/Perturasan",
      data: [10, 8, 7.5, 9, 7, 8.2, 6.8, 6.8, 8, 9.1, 10.3, 8.5, 8.5, 7.3],
      fill: true,
      backgroundColor: "orange",
    },
    {
      label: "PDAM-Cooling Tower",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "yellow",
    },
    {
      label: "Rainwater Cooling Tower",
      data: [6.1, 7.3, 7, 6.7, 5, 8, 6, 7.2, 4, 5.1, 7.3, 5.5, 6.5, 7.3],
      fill: true,
      backgroundColor: "green",
    },
    {
      label: "Water Treatment Plant",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "blue",
    },
    {
      label: "Recycled Water Tank",
      data: [6.1, 7.3, 7, 6.7, 5, 8, 6, 7.2, 4, 5.1, 7.3, 5.5, 6.5, 7.3],
      fill: true,
      backgroundColor: "violet",
    },
    {
      label: "Reverse Osmosis",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "purple",
    },
  ],
}

const legend = {
  display: true,
  position: "right",
  labels: {
    fontColor: "#323130",
    fontSize: 14,
  },
}

const options = {
  title: {
    display: true,
    text: "Chart Title",
  },
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontColor: "pink", //abaikan
    },
  },
}

export default () => {
  //   const displayName = "DoughnutExample"
  return (
    <div style={{ gridArea: "chart" }} className="neo">
      <h2>Bar Example</h2>
      <Bar data={data} legend={legend} options={options} />
    </div>
  )
}
