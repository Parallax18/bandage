import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#23A6F0",
    },
    secondary: {
      main: "#23856D",
      contrastText: "#fff",
    },
    success: {
      main: "#2DC071",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      disabled: "#BDBDBD",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          height: "3.25rem",
          padding: "0.9375rem 2.5rem",
          borderRadius: "0.3125rem",
          background: "primary",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: "0.3125rem",
            border: "1px solid #23A6F0",
            background: "primary",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            background: "primary",
          },
        },
      ],
    },
  },
  typography: {
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontFamily: montserrat.style.fontFamily,

    h6: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.5rem",
      letterSpacing: "0.0125rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "3.125rem",
      letterSpacing: "0.0125rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "2rem",
      letterSpacing: "0.00625rem",
    },
  },
});
