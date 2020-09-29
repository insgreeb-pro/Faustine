import Pin from "./Pin"

export default () => {
  //   LIST PIN
  const pin = [
    {
      lokasi: "Kepala Jurusan",
      top: "10%",
      left: "7%",
      data: [
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
      ],
    },
    {
      lokasi: "Sekretaris",
      top: "10%",
      left: "13%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Administrasi",
      top: "10%",
      left: "18.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.11",
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
            value: "0.5",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Mahasiswa",
      top: "10%",
      left: "36%",
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
      ],
    },
    {
      lokasi: "Ruang Panitia AdHoc",
      top: "10.5%",
      left: "42.5%",
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
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "10%",
      left: "49.5%",
      data: [
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
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "10%",
      left: "56.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "10%",
      left: "61%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "10%",
      left: "65.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Coolbox",
      top: "10%",
      left: "79.5%",
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
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "8%",
      left: "84%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Kepala",
      top: "8%",
      left: "88.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.11",
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
            value: "0.5",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Komputer",
      top: "8%",
      left: "93%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Lobby",
      top: "18%",
      left: "26.5%",
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
      ],
    },
    {
      lokasi: "Ruang Sidang 1",
      top: "40%",
      left: "8%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar CO2",
            value: "600",
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
      ],
    },
    {
      lokasi: "Ruang Pengajaran",
      top: "40%",
      left: "17.3%",
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
      ],
    },
    {
      lokasi: "Lab Energi Terbarukan",
      top: "40%",
      left: "36%",
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
            value: "0.90",
            unit: "mg/m3",
            thld: "1.0", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
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
      ],
    },
    {
      lokasi: "Ruang Kuliah 1",
      top: "40%",
      left: "45.3%",
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
      ],
    },
    {
      lokasi: "Lab Analisis Radioaktivitas",
      top: "40%",
      left: "65.5%",
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
      ],
    },
    {
      lokasi: "Ruang Kepala Lab",
      top: "26.4%",
      left: "79.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Lab Kimia Terapan",
      top: "22.5%",
      left: "88.5%",
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
      ],
    },
    {
      lokasi: "Ruang Kepala Lab",
      top: "62%",
      left: "71.3%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "69%",
      left: "71.3%",
      data: [
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
      ],
    },
    {
      lokasi: "Ruang Dosen",
      top: "76.1%",
      left: "71.3%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
          },
        },
      ],
    },
    {
      lokasi: "Studio Akustik",
      top: "93.5%",
      left: "70.5%",
      data: [
        {
          tipe: "Number",
          props: {
            title: "Kadar debu",
            value: "0.13",
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
            value: "39",
            thld: "25", // YANG INI AGA ANEH, DIA PAKE RANGE GITUU
            info:
              "Touch base that ipo will be a game-changer circle back around focus on the customer journey, or peel the onion nor circle back.",
          },
        },
        {
          tipe: "Number",
          props: {
            title: "Kadar VOC",
            value: "0.25",
            thld: "0.1", //JANGAN LUPA DIBALIK THRESHOLDNYA, harusnya batas maksimum, bukan minimum
            unit: "ppm",
            info:
              "Wiggle room driving the initiative forward low hanging fruit. Not the long pole in my tent.",
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
      <div style={{ gridArea: "lantai1", padding: "4%" }} className="neo">
        <img src="/img/Denah Lantai 1.svg  " className="denah" />
        {all_pin}
      </div>
    </>
  )
}
