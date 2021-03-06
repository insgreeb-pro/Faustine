import Pin from "./Pin"

export default () => {
  //   LIST PIN
  const pin = [
    {
      lokasi: "Ruang Kuliah 2",
      top: "32%",
      left: "8%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "710",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.20",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "53",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.2",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Lab Komputasi",
      top: "32%",
      left: "43%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "703",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.15",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "50",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Kuliah 6",
      top: "32%",
      left: "56%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "710",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.20",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "53",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.2",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Seminar",
      top: "32%",
      left: "67.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "703",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.15",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "50",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Kuliah 3",
      top: "60%",
      left: "8%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "703",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.15",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "50",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Kuliah 4",
      top: "61.5%",
      left: "17.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "710",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.20",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "53",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.2",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Lab Sistem Sensor dan Telekontrol",
      top: "64.5%",
      left: "50%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "710",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.20",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "53",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.2",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Kuliah 7",
      top: "60%",
      left: "90%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "703",
            unit: "ppm",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA
            info:
              "Even dead cats bounce put a record on and see who dances, or I just wanted to give you a heads-up, core competencies, yet drink from the firehose, or baseline the procedure and samepage your department.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.15",
            unit: "mg/m3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            info:
              "Run it up the flag pole we’re starting to formalize flexible opinions around our foundations.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Sound Transmission Class",
            value: "50",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.3",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Jumlah kuman",
            value: "700",
            thld: "100", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "kol/m3",
            info:
              "Don't over think it put a record on and see who dances parallel path hammer out, nor that is a good problem to have.",
          },
        },
        {
          tipe: "Circular",
          props: {
            title: "Kepuasan pengguna gedung",
            value: "3.5",
            minV: "0",
            maxV: "5",
            unit: "",
            thld: "3",
            info:
              "Turn the crank offline this discussion draft policy ppml proposal yet closing these latest prospects is like putting socks on an octopus you better eat a reality sandwich before you walk back in that boardroom",
          },
        },
      ],
    },
  ]
  const all_pin = pin.map(({ lokasi, left, top, data }) => (
    <Pin key={lokasi} lokasi={lokasi} left={left} top={top} data={data} />
  ))

  return (
    <>
      <div style={{ gridArea: "lantai2", padding: "4%" }} className="neo">
        <img src="/img/Denah Lantai 2.svg  " className="denah" />
        {all_pin}
      </div>
    </>
  )
}
