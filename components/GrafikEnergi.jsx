import { Line } from "react-chartjs-2"

const data = {
  labels: [
    "Jan 19",
    "Feb 19",
    "Mar 19",
    "Apr 19",
    "May 19",
    "Jun 19",
    "Jul 19",
    "Aug 19",
    "Oct 19",
    "Nov 19",
    "Dec 19",
    "Jan 20",
    "Feb 20",
    "Mar 20",
  ],
  datasets: [
    {
      label: "HVAC",
      data: [42, 21, 52.5, 40, 28, 26.5, 11, 8.5, 24, 42.5, 42, 26, 41, 44],
      borderColor: "#93C9F2",
      backgroundColor: "rgba(0,0,0,0)",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Pencahayaan",
      data: [27, 21, 27.5, 22, 23, 21.5, 10, 3.5, 19, 26.5, 27, 18, 26, 29],
      borderColor: "#93F2D5",
      backgroundColor: "rgba(0,0,0,0)",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Beban Lainnya",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
      borderColor: "#F2AD93",
      backgroundColor: "rgba(0,0,0,0)",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Baseline",
      data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
      borderColor: "#232323",
      backgroundColor: "rgba(0,0,0,0)",
      pointHitRadius: 0,
      pointRadius: "0",
      pointHoverBorderColor: "rgba(0,0,0,0)",
      pointHoverBackgroundColor: "rgba(0,0,0,0)",
      borderDash: [10, 10],
      yAxisID: "baseline",
      // barThickness: "10%",
    },
  ],
}

const options = {
  legend: {
    position: "right",
    labels: {
      fontSize: 14,
    },
  },
  title: {
    display: true,
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    fontSize: 18,
    text: "Indeks Konsumsi Energi Bangunan",
  },
  scales: {
    xAxes: [
      { stacked: true, scaleLabel: { display: true, labelString: "Bulan" } },
    ],
    yAxes: [
      {
        id: "data",
        type: "linear",
        stacked: true,
        ticks: {
          min: 0,
          max: 100,
        },
        scaleLabel: { display: true, labelString: "IKE (kWh/m2)" },
      },
      {
        id: "baseline",
        display: false,
        ticks: {
          min: 0,
          max: 100,
        },
        type: "linear",
      },
    ],
    // [
    //   {
    //     stacked: true,
    //     scaleLabel: { display: true, labelString: "IKE (kWh/m2)" },
    //   },
    // ],
  },
}

export default () => {
  return (
    <div style={{ gridArea: "chart", padding: "3%" }} className="neo">
      <Line data={data} options={options} />
    </div>
  )
}
