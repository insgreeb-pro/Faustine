import { Bar } from "react-chartjs-2"
import { Container } from "../Container"

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
}

const legend = {
  display: true,
  position: "bottom",
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
}

export default () => {
  //   const displayName = "DoughnutExample"
  return (
    <>
      <h2>Bar Example (custom size)</h2>
      <Bar data={data} legend={legend} options={options} />
    </>
  )
}
