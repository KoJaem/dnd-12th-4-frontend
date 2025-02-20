import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "280px",
      md: "375px",
      lg: "460px"
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
      pixel: ["var(--font-pixel)"]
    },
    fontSize: {
      "headline-01": ["24px", { fontWeight: 700, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "headline-02": ["20px", { fontWeight: 700, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-01": ["20px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-02": ["18px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-03": ["16px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "subtitle-04": ["14px", { fontWeight: 600, lineHeight: "1.5", letterSpacing: "-0.2" }],
      "body-01": ["16px", { fontWeight: 500, lineHeight: "1.6", letterSpacing: "-0.2" }],
      "body-02": ["16px", { fontWeight: 400, lineHeight: "1.6", letterSpacing: "-0.2" }],
      "body-03": ["14px", { fontWeight: 500, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "body-04": ["14px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "caption-01": ["12px", { fontWeight: 500, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "caption-02": ["12px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.2" }],
      "pixel-headline": ["16px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.5" }],
      "pixel-body": ["14px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.5" }],
      "pixel-caption": ["12px", { fontWeight: 400, lineHeight: "1.4", letterSpacing: "-0.5" }]
    },
    borderRadius: {
      xsm: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      full: "9999px"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FDD835",
          0: "#FDD83526",
          50: "#FFF1BF",
          100: "#FFE057",
          200: "#FDD835",
          300: "#FFD000",
          400: "#A85F00"
        },
        secondary: {
          DEFAULT: "#1263C9",
          0: "#358FFF26",
          100: "#A2CBFF",
          200: "#358FFF",
          300: "#1263C9"
        },
        gray: {
          DEFAULT: "#292D30",
          "01": "#F5F8FA",
          "02": "#ECF0F3",
          "03": "#D7DFE7",
          "04": "#9CAAB9",
          "05": "#637180",
          "06": "#3C4754",
          "07": "#2F363E",
          "08": "#292D30",
          "09": "#1A1E21"
        },
        error: {
          DEFAULT: "#D13838",
          light: "#D1383826"
        },
        emphasis: {
          high: "#000000DE",
          medium: "#00000099"
        },
        background: "#FFFFFF",
        outline: "#0000001F",
        disabled: "#00000061"
      }
    }
  },
  plugins: []
} satisfies Config
