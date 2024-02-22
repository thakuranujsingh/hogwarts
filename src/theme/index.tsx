import { createTheme } from "@mui/material/styles";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
});

// Create a theme instance.
export const theme = createTheme({
  palette: {
    mode: "dark",

    // add theme variable for to customize the MUI theme as per design requirement
  },
  typography: {
    fontFamily: readexPro.style.fontFamily,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    htmlFontSize: 16,
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "-0.32px",
      marginBottom: "16px",
      color: "inherit",
      "@media (max-width: 689px)": {
        fontSize: "14px",
      },
    },
    h1: {
      fontSize: "52px",
      fontWeight: 500,
      letterSpacing: "-1.04px",
      marginBottom: "22px",
      "@media (max-width: 689px)": {
        fontSize: "22px",
        fontWidth: "bold",
      },
    },
    h3: {
      fontSize: "36px",
      letterSpacing: "-0.72px",
      fontWeight: 500,
      marginBottom: "24px",
      "@media (max-width: 689px)": {
        fontSize: "28px",
        fontWidth: "bold",
      },
    },
    h4: {
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      "@media (max-width: 689px)": {
        fontSize: "22px",
      },
    },
    h5: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "16px",
      "@media (max-width: 689px)": {
        fontSize: "18px",
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: "break-word",
        },
        paragraph: {
          fontSize: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
        sizeMedium: {
          padding: "16px 24px",
          lineHeight: 1,
          borderRadius: "2px",
        },
        sizeSmall: {
          fontSize: "12px",
          padding: "10px 20px",
          letterSpacing: "1.8px",
          borderRadius: "2px",
        },
        containedSecondary: {
          color: "#0070af",
          border: "1px solid #0070af",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#142530",
          marginBottom: "24px",
          borderRadius: "8px",
          color: "inherit",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "@media (max-width: 689px)": {
            padding: "16px",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "16px",
          margin: "0",
          color: "#fff",
          "@media (max-width: 689px)": {
            fontSize: "14px",
          },
        },
      },
    },
  },
});
