import { createTheme } from "@mui/material";
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
      contrastText: "#fff",
    },
    secondary: {
      main: "#23856D",
      contrastText: "#fff",
    },
    success: {
      main: "#2DC071",
    },
    grey: {
      light: "#fafafa",
    },
    danger: {
      main: "#E74040",
      contrastText: "#fff",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      disabled: "#8EC2F2",
      muted: "#BDBDBD",
      light: "#fff",
    },
  },
  components: {
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: "#F3CD03",
        },
        iconEmpty: {
          color: "#F3CD03",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontFamily: montserrat.style.fontFamily,
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "1.5rem",
          letterSpacing: "0.0125rem",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          fontFamily: montserrat.style.fontFamily,
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
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: "72px",
        fontSizeMedium: "16px",
        fontSizeSmall: "12px",
      },
    },
  },
  typography: {
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,

    allVariants: { fontFamily: montserrat.style.fontFamily },
    small: {
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1rem",
      letterSpacing: "0.0125rem",
      fontFamily: montserrat.style.fontFamily,
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
    h4: {
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.875rem",
      letterSpacing: "0.0125rem",
    },
    h5: {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.5rem",
      letterSpacing: "0.00625rem",
    },
    h6: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "1.5rem",
      letterSpacing: "0.0125rem",
    },
    body1: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.25rem",
      letterSpacing: "0.0125rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.25rem",
      letterSpacing: "0.0125rem",
    },
  },
});

declare module "@mui/material" {
  interface TypographyVariants {
    small: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    small?: React.CSSProperties;
  }

  interface Color {
    light?: string;
  }

  interface TypeText {
    muted?: string;
    light?: string;
  }

  interface Palette {
    danger: Palette["primary"];
  }

  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    small: true;
  }
}
