/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      smTab: "32.5em", // 520px
      tab: "40em", // 640px
      lgTab: "45em", // 720px
      lap: "63.75em", // 1070px
    },
    colors: {
      purple: "#AD1FEA",
      pink: "#C75AF6",
      blue: "#4661E6",
      navy: "#373F68",
      white: "#FFFFFF",
      iceWhite: "#F2F4FF",
      offWhite: "#F7F8FD",
      lightNavy: "#3A4374",
      gray: "#647196",
      orange: "#F49F85",
      lightBlue: "#62BCFA",
    },
    fontFamily: {
      jost: "'Jost', sans-serif",
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      smTab: "40px repeat(10,1fr) 40px",
      sortBarMob: "1fr auto",
      feebackBox: "1fr auto",
      feebackBoxTablet: "auto 1fr auto",
      lap: "40px auto 30px 1fr 40px",
    },
    boxShadow: {
      sortDropdown: "0px 10px 40px -7px rgba(55, 63, 104, 0.35)",
    },
    extend: {},
  },
  plugins: [],
};
