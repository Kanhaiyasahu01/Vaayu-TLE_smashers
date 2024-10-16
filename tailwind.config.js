/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
      pacifico: ['Pacifico', 'cursive'],
    },
    colors: {
      white: "#fff",
      richwhite: "#F9F9F9",
      black: "#000",
      transparent: "#ffffff00",
      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },
      richblue: {
        5: "#ECF5FF",
        25: "#C6D6E1",
        50: "#A0B7C3",
        100: "#7A98A6",
        200: "#537988",
        300: "#2D5A6A",
        400: "#073B4C",
        500: "#063544",
        600: "#042E3B",
        700: "#032833",
        800: "#01212A",
        900: "#001B22",
      },
      blue: {
        5: "#EAF5FF",
        25: "#B4DAEC",
        50: "#7EC0D9",
        100: "#E3E8F9",
        200: "#BDC9F3",
        300: "#9D9EEC",
        400: "#7D7DEE",
        500: "#5F62F0",
        600: "#4C4FDC",
        700: "#3A3EB8",
        800: "#292D94",
        900: "#1A1F78",
      },
      caribbeangreen: {
        5: "#C1FFFD",
        25: "#83F1DE",
        50: "#44E4BF",
        100: "#06D6A0",
        200: "#05BF8E",
        300: "#05A77B",
        400: "#049069",
        500: "#037957",
        600: "#026144",
        700: "#014A32",
        800: "#01321F",
        900: "#001B0D",
      },
      brown: {
        5: "#FFF4C4",
        25: "#FFE395",
        50: "#FFD166",
        100: "#E7BC5B",
        200: "#CFA64F",
        300: "#B89144",
        400: "#A07C39",
        500: "#88662D",
        600: "#705122",
        700: "#593C17",
        800: "#41260B",
        900: "#291100",
      },
      pink: {
        5: "#FFF1F1",
        25: "#FBC7D1",
        50: "#F79CB0",
        100: "#F37290",
        200: "#EF476F",
        300: "#D43D63",
        400: "#BA3356",
        500: "#9F294A",
        600: "#841E3E",
        700: "#691432",
        800: "#4F0A25",
        900: "#340019",
      },
      yellow: {
        5: "#FFF970",
        25: "#FFE83D",
        50: "#FFD60A",
        100: "#E7C009",
        200: "#CFAB08",
        300: "#B69507",
        400: "#9E8006",
        500: "#FFFF00",
        600: "#6E5503",
        700: "#553F02",
        800: "#3D2A01",
        900: "#251400",
      },
      green: {
        500: "#00FF00",
      },
      lightgreen: {
        500: "#9ACD32",
      },
      red: {
        500: "#FF0000",
      },
      orange: {
        500: "#FFA500",
      },
      gray: {
  50: "#F9FAFB",    // Lightest gray, almost white
  100: "#F3F4F6",   // Very light gray
  200: "#E5E7EB",   // Light gray
  300: "#D1D5DB",   // Medium light gray
  400: "#9CA3AF",   // Neutral gray
  500: "#6B7280",   // Standard gray
  600: "#4B5563",   // Dark gray
  700: "#374151",   // Darker gray, suitable for borders/text
  800: "#1F2937",   // Very dark gray
  900: "#111827",   // Darkest gray, almost black
},
      "pure-greys": {
        5: "#F9F9F9",
        25: "#E2E2E2",
        50: "#CCCCCC",
        100: "#B5B5B5",
        200: "#9E9E9E",
        300: "#888888",
        400: "#717171",
        500: "#5B5B5B",
        600: "#444444",
        700: "#2D2D2D",
        800: "#171717",
        900: "#141414",
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-in': 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@codaworks/react-glow/tailwind')],
};
