import { useState } from "react"
import { Bar } from "react-chartjs-2"
import Selector from "./Selector"

const data = [
  {
    name: "Gedung",
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
    ],
    datasets: [
      {
        label: "HVAC",
        data: [42, 21, 52.5, 40, 28, 26.5, 11, 8.5, 24, 42.5, 42, 26],
        borderColor: "#93C9F2",
        backgroundColor: "#93C9F2",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Pencahayaan",
        data: [27, 21, 27.5, 22, 23, 21.5, 10, 3.5, 19, 26.5, 27, 18],
        borderColor: "#93F2D5",
        backgroundColor: "#93F2D5",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Beban Lainnya",
        data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5],
        borderColor: "#F2AD93",
        backgroundColor: "#F2AD93",
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
        type: "line",
      },
    ],
  },
  {
    name: "Lantai 1",
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
    ],
    datasets: [
      {
        label: "HVAC",
        data: [20, 10, 24.5, 18, 19, 10, 7, 3.5, 12.5, 22.5, 21, 15],
        borderColor: "#93C9F2",
        backgroundColor: "#93C9F2",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Pencahayaan",
        data: [12, 7, 10.5, 9, 12, 14, 3, 2, 8, 12, 19.5, 4],
        borderColor: "#93F2D5",
        backgroundColor: "#93F2D5",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Beban Lainnya",
        data: [2, 3, 4.5, 4.7, 3, 3, 2, 3.1, 1.4, 2.1, 2.3, 4.5],
        borderColor: "#F2AD93",
        backgroundColor: "#F2AD93",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Baseline",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "#232323",
        backgroundColor: "rgba(0,0,0,0)",
        pointHitRadius: 0,
        pointRadius: "0",
        pointHoverBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "rgba(0,0,0,0)",
        borderDash: [10, 10],
        yAxisID: "baseline",
        type: "line",
      },
    ],
  },
  {
    name: "Lantai 2",
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
    ],
    datasets: [
      {
        label: "HVAC",
        data: [22, 11, 28.5, 22, 9, 16.5, 4, 5, 11.5, 20, 21, 11],
        borderColor: "#93C9F2",
        backgroundColor: "#93C9F2",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Pencahayaan",
        data: [15, 14, 17, 13, 11, 7.5, 7, 1.5, 11, 14.5, 5.5, 14],
        borderColor: "#93F2D5",
        backgroundColor: "#93F2D5",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Sistem Beban Lainnya",
        data: [4, 4, 3, 2, 4, 3, 2, 4.1, 1.6, 2, 3, 3],
        borderColor: "#F2AD93",
        backgroundColor: "#F2AD93",
        pointHitRadius: "10",
        yAxisID: "data",
      },
      {
        label: "Baseline",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "#232323",
        backgroundColor: "rgba(0,0,0,0)",
        pointHitRadius: 0,
        pointRadius: "0",
        pointHoverBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "rgba(0,0,0,0)",
        borderDash: [10, 10],
        yAxisID: "baseline",
        type: "line",
      },
    ],
  },
]

const options = [
  {
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
      text: "Indeks Konsumsi Energi (IKE) DTNTF UGM",
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
    },
  },
  {
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
      text: "Indeks Konsumsi Energi (IKE) Lantai 1",
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
    },
  },
  {
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
      text: "Indeks Konsumsi Energi (IKE) Lantai 2",
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
    },
  },
]

export default () => {
  const [Display, setDisplay] = useState(0)

  return (
    <>
      <div
        style={{ gridArea: "chart", padding: "3%", height: "auto" }}
        className="neo"
      >
        <Bar data={data[Display]} options={options[Display]} redraw />
      </div>
      <Selector
        parent={setDisplay}
        active={Display}
        options={data}
        title="Indeks Konsumsi Energi"
      />
    </>
  )
}
