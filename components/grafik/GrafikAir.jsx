import { useState } from "react"
import Selector2 from "./Selector2"
import { Line } from "react-chartjs-2"

const data = [
  () => {
    return {
      name: "Konsumsi Air",
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
          label: "Keran",
          data: [32, 21, 32.5, 11.2, 28, 26.5, 11, 8.5, 10, 4.5, 7, 16, 31, 34],
          borderColor: "#93C9F2",
          backgroundColor: "rgba(0,0,0,0)",
          pointHitRadius: "10",
          yAxisID: "data",
        },
        {
          label: "Perturasan",
          data: [10, 8, 7.5, 9, 7, 8.2, 6.8, 6.8, 8, 15, 10.3, 8.5, 8.5, 7.3],
          borderColor: "#93F2D5",
          backgroundColor: "rgba(0,0,0,0)",
          pointHitRadius: "10",
          yAxisID: "data",
        },
        {
          label: "Keran  Wudhu",
          data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
          borderColor: "#F2EF93",
          backgroundColor: "rgba(0,0,0,0)",
          pointHitRadius: "10",
          yAxisID: "data",
        },
        {
          label: "Kebun",
          data: [6.1, 7.3, 7, 6.7, 5, 8, 6, 7.2, 4, 5.1, 7.3, 5.5, 6.5, 7.3],
          borderColor: "#F2AD93",
          backgroundColor: "rgba(0,0,0,0)",
          pointHitRadius: "10",
          yAxisID: "data",
        },
        {
          label: "Baseline",
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
  },
  {
    name: "Sumber Air",
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
        data: [
          35.1,
          33,
          32.4,
          24.6,
          40,
          40.5,
          22,
          22.9,
          17,
          13.7,
          19.6,
          29,
          43,
          49.6,
        ],
        borderColor: "#93C9F2",
        backgroundColor: "rgba(0,0,0,0)",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Air Daur Ulang",
        data: [19, 10.3, 22.1, 9, 7, 8.2, 6.8, 6.8, 8, 15, 10.3, 8.5, 8.5, 7.3],
        borderColor: "#93F2D5",
        backgroundColor: "rgba(0,0,0,0)",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Baseline",
        data: [
          -85,
          -73,
          -61,
          -51,
          -41,
          -33,
          -25,
          -19,
          -13.5,
          -9,
          -5.5,
          -3,
          -1.5,
          -1,
        ],
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
  },
]

const options = {
  scales: {
    xAxes: [
      { stacked: true, scaleLabel: { display: true, labelString: "Tanggal" } },
    ],
    yAxes: [
      {
        id: "data",
        stacked: true,
        ticks: {
          min: 0,
          max: 70,
          scaleLabel: {
            display: true,
            labelString: "Konsumsi Air(L/orang/hari)",
          },
        },
      },
      {
        id: "baseline",
        display: false,
        ticks: {
          min: 0,
          max: 70,
        },
      },
    ],
  },
  title: {
    display: true,
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    fontSize: 18,
    text: "Konsumsi Air Bangunan",
  },
  legend: {
    position: "right",
    labels: {
      fontSize: 14,
    },
  },
}

export default () => {
  const [Display, setDisplay] = useState(0)

  const Callback = (value) => {
    setDisplay(value)
  }

  return (
    <>
      <div style={{ gridArea: "chart", padding: "3%" }} className="neo">
        <Line data={data[Display]} options={options} />
        {/* {`data.${Display}`} */}
        {/* {datas} */}
      </div>
      <Selector2 parent={Callback} active={Display} options={data} />
    </>
  )
}
