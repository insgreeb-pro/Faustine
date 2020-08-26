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
      label: "IKE",
      data: [82, 71, 82.5, 80, 78, 76.5, 61, 58.5, 74, 82.5, 82, 76, 81, 84],
      borderColor: "rgba(35,35,35,0.7)",

      pointHitRadius: "10",
      pointRadius: function (context) {
        var index = context.dataIndex
        var value = context.dataset.data[index]
        return value > 80 ? 5 : 6
      },
      pointBackgroundColor: function (context) {
        var index = context.dataIndex
        var value = context.dataset.data[index]
        return value > 80 ? "#F29393" : "#93F2D5"
      },
      pointBorderColor: "rgba(0,0,0,0.4)",
      backgroundColor: "rgba(0,0,0,0)",
    },
    {
      data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
      pointHitRadius: 0,
      pointRadius: "0",
      backgroundColor: "rgba(147,201,242,0.6)",
      borderWidth: "4",
      borderDash: [10, 10],
    },
  ],
}

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{ scaleLabel: { display: true, labelString: "Bulan" } }],
    yAxes: [{ scaleLabel: { display: true, labelString: "IKE (kWh/m2)" } }],
  },
}

export default () => {
  return (
    <div style={{ gridArea: "chart", padding: "3%" }} className="neo">
      <p class="mapTitle">Indeks Konsumsi Energi Bangunan</p>
      <Line data={data} options={options} />
    </div>
  )
}
