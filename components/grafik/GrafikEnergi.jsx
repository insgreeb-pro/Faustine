import { useState } from "react"
import { Bar } from "react-chartjs-2"
import Selector from "../grafik/Selector"

const gedung = {
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
    "Feb 20",
    "Mar 20",
  ],
  datasets: [
    {
      label: "HVAC",
      data: [42, 21, 52.5, 40, 28, 26.5, 11, 8.5, 24, 42.5, 42, 26, 41, 44],
      borderColor: "#93C9F2",
      backgroundColor: "#93C9F2",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Pencahayaan",
      data: [27, 21, 27.5, 22, 23, 21.5, 10, 3.5, 19, 26.5, 27, 18, 26, 29],
      borderColor: "#93F2D5",
      backgroundColor: "#93F2D5",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Beban Lainnya",
      data: [6, 7, 7.5, 6.7, 7, 6, 5, 7.2, 3, 4.1, 5.3, 7.5, 5.5, 8.3],
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
}

const lantai1 = {
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
    "Feb 20",
    "Mar 20",
  ],
  datasets: [
    {
      label: "HVAC",
      data: [20, 10, 24.5, 18, 19, 10, 7, 3.5, 12.5, 22.5, 21, 15, 29, 20],
      borderColor: "#93C9F2",
      backgroundColor: "#93C9F2",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Pencahayaan",
      data: [12, 7, 10.5, 9, 12, 14, 3, 2, 8, 12, 19.5, 4, 14, 15.5],
      borderColor: "#93F2D5",
      backgroundColor: "#93F2D5",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Beban Lainnya",
      data: [2, 3, 4.5, 4.7, 3, 3, 2, 3.1, 1.4, 2.1, 2.3, 4.5, 3.5, 3],
      borderColor: "#F2AD93",
      backgroundColor: "#F2AD93",
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
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
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
}

const lantai2 = {
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
    "Feb 20",
    "Mar 20",
  ],
  datasets: [
    {
      label: "HVAC",
      data: [22, 11, 28.5, 22, 9, 16.5, 4, 5, 11.5, 20, 21, 11, 12, 24],
      borderColor: "#93C9F2",
      backgroundColor: "#93C9F2",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Pencahayaan",
      data: [15, 14, 17, 13, 11, 7.5, 7, 1.5, 11, 14.5, 5.5, 14, 12, 13.5],
      borderColor: "#93F2D5",
      backgroundColor: "#93F2D5",
      pointHitRadius: "10",
      yAxisID: "data",
    },
    {
      label: "Sistem Beban Lainnya",
      data: [4, 4, 3, 2, 4, 3, 2, 4.1, 1.6, 2, 3, 3, 2, 5.3],
      borderColor: "#F2AD93",
      backgroundColor: "#F2AD93",
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
      type: "line",
    },
  ],
}

const data = [gedung, lantai1, lantai2]

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
    text: "Indeks Konsumsi Energi DTNTF UGM",
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
}

export default () => {
  const [Display, setDisplay] = useState(0)

  return (
    <>
      <div style={{ gridArea: "chart", padding: "3%" }} className="neo">
        <Bar data={data[Display]} options={options} redraw />
      </div>
      <Selector parent={setDisplay} active={Display} options={data} />
    </>
  )
}

// import { ResponsiveLine } from "@nivo/line"

// const data = [
//   {
//     id: "japan",
//     color: "hsl(20, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 297,
//       },
//       {
//         x: "helicopter",
//         y: 295,
//       },
//       {
//         x: "boat",
//         y: 232,
//       },
//       {
//         x: "train",
//         y: 68,
//       },
//       {
//         x: "subway",
//         y: 200,
//       },
//       {
//         x: "bus",
//         y: 236,
//       },
//       {
//         x: "car",
//         y: 143,
//       },
//       {
//         x: "moto",
//         y: 97,
//       },
//       {
//         x: "bicycle",
//         y: 17,
//       },
//       {
//         x: "horse",
//         y: 65,
//       },
//       {
//         x: "skateboard",
//         y: 238,
//       },
//       {
//         x: "others",
//         y: 8,
//       },
//     ],
//   },
//   {
//     id: "france",
//     color: "hsl(252, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 157,
//       },
//       {
//         x: "helicopter",
//         y: 196,
//       },
//       {
//         x: "boat",
//         y: 9,
//       },
//       {
//         x: "train",
//         y: 30,
//       },
//       {
//         x: "subway",
//         y: 275,
//       },
//       {
//         x: "bus",
//         y: 190,
//       },
//       {
//         x: "car",
//         y: 76,
//       },
//       {
//         x: "moto",
//         y: 88,
//       },
//       {
//         x: "bicycle",
//         y: 179,
//       },
//       {
//         x: "horse",
//         y: 256,
//       },
//       {
//         x: "skateboard",
//         y: 77,
//       },
//       {
//         x: "others",
//         y: 7,
//       },
//     ],
//   },
//   {
//     id: "us",
//     color: "hsl(42, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 214,
//       },
//       {
//         x: "helicopter",
//         y: 70,
//       },
//       {
//         x: "boat",
//         y: 85,
//       },
//       {
//         x: "train",
//         y: 242,
//       },
//       {
//         x: "subway",
//         y: 209,
//       },
//       {
//         x: "bus",
//         y: 52,
//       },
//       {
//         x: "car",
//         y: 118,
//       },
//       {
//         x: "moto",
//         y: 73,
//       },
//       {
//         x: "bicycle",
//         y: 140,
//       },
//       {
//         x: "horse",
//         y: 117,
//       },
//       {
//         x: "skateboard",
//         y: 152,
//       },
//       {
//         x: "others",
//         y: 220,
//       },
//     ],
//   },
//   {
//     id: "germany",
//     color: "hsl(41, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 173,
//       },
//       {
//         x: "helicopter",
//         y: 97,
//       },
//       {
//         x: "boat",
//         y: 158,
//       },
//       {
//         x: "train",
//         y: 152,
//       },
//       {
//         x: "subway",
//         y: 200,
//       },
//       {
//         x: "bus",
//         y: 294,
//       },
//       {
//         x: "car",
//         y: 0,
//       },
//       {
//         x: "moto",
//         y: 296,
//       },
//       {
//         x: "bicycle",
//         y: 263,
//       },
//       {
//         x: "horse",
//         y: 239,
//       },
//       {
//         x: "skateboard",
//         y: 106,
//       },
//       {
//         x: "others",
//         y: 180,
//       },
//     ],
//   },
//   {
//     id: "norway",
//     color: "hsl(151, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 177,
//       },
//       {
//         x: "helicopter",
//         y: 172,
//       },
//       {
//         x: "boat",
//         y: 66,
//       },
//       {
//         x: "train",
//         y: 144,
//       },
//       {
//         x: "subway",
//         y: 267,
//       },
//       {
//         x: "bus",
//         y: 216,
//       },
//       {
//         x: "car",
//         y: 24,
//       },
//       {
//         x: "moto",
//         y: 285,
//       },
//       {
//         x: "bicycle",
//         y: 86,
//       },
//       {
//         x: "horse",
//         y: 124,
//       },
//       {
//         x: "skateboard",
//         y: 210,
//       },
//       {
//         x: "others",
//         y: 291,
//       },
//     ],
//   },
// ]

// function Chart({ data /* see data tab */ }) {
//   ;<ResponsiveLine
//     data={data}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     xScale={{ type: "point" }}
//     yScale={{
//       type: "linear",
//       min: "auto",
//       max: "auto",
//       stacked: true,
//       reverse: false,
//     }}
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       orient: "bottom",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "transportation",
//       legendOffset: 36,
//       legendPosition: "middle",
//     }}
//     axisLeft={{
//       orient: "left",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "count",
//       legendOffset: -40,
//       legendPosition: "middle",
//     }}
//     colors={{ scheme: "nivo" }}
//     pointColor={{ theme: "background" }}
//     pointBorderWidth={2}
//     pointBorderColor={{ from: "serieColor" }}
//     pointLabel="yFormatted"
//     pointLabelYOffset={-12}
//     useMesh={true}
//     legends={[
//       {
//         anchor: "right",
//         direction: "column",
//         justify: false,
//         translateX: 100,
//         translateY: 0,
//         itemsSpacing: 7,
//         itemDirection: "left-to-right",
//         itemWidth: 80,
//         itemHeight: 20,
//         itemOpacity: 0.75,
//         symbolSize: 16,
//         symbolShape: "circle",
//         symbolBorderColor: "rgba(0, 0, 0, .5)",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemBackground: "rgba(0, 0, 0, .03)",
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//   />
// }

// export default () => {
//   const render = Chart(data)
//   return { render }
// }
