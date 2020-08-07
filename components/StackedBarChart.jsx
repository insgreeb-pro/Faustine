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
      backgroundColor: "#93C9F2",
    },
    {
      label: "Keran/Perturasan",
      data: [10, 8, 7.5, 9, 7, 8.2, 6.8, 6.8, 8, 9.1, 10.3, 8.5, 8.5, 7.3],
      fill: true,
      backgroundColor: "#93F2D5",
    },
    {
      label: "PDAM-Cooling Tower",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "#F2EF93",
    },
    {
      label: "Rainwater Cooling Tower",
      data: [6.1, 7.3, 7, 6.7, 5, 8, 6, 7.2, 4, 5.1, 7.3, 5.5, 6.5, 7.3],
      fill: true,
      backgroundColor: "#F2AD93",
    },
    {
      label: "Water Treatment Plant",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "#F29393",
    },
    {
      label: "Recycled Water Tank",
      data: [6.1, 7.3, 7, 6.7, 5, 8, 6, 7.2, 4, 5.1, 7.3, 5.5, 6.5, 7.3],
      fill: true,
      backgroundColor: "#F293E5",
    },
    {
      label: "Reverse Osmosis",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      fill: true,
      backgroundColor: "#B293F2",
    },
  ],
}

const options = {
  scales: {
    xAxes: [
      { stacked: true, scaleLabel: { display: true, labelString: "Tanggal" } },
    ],
    yAxes: [
      {
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: "Konsumsi Air(L/orang/hari)",
        },
      },
    ],
  },

  legend: {
    position: "right",
    labels: {
      fontSize: 14,
    },
  },
}

export default () => {
  //   const displayName = "DoughnutExample"
  return (
    <div style={{ gridArea: "chart", padding: "3%" }} className="neo">
      <p class="mapTitle">Konsumsi Air Bangunan</p>
      <Bar data={data} options={options} />
    </div>
  )
}
