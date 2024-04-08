import { createTheme, ThemeProvider } from "@mui/material";
import "./theme.scss";
declare module "@mui/material/styles" {
  interface CustomTheme {
    custom?: {
      coloredBulletList: Object;
    };
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
export interface IThemeChild {
  children?: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#03204c", // Blue
    },
  },
  custom: {
    coloredBulletList: {
      listStyle: "none",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "8px 0", // Adjust as needed
      "& li": {
        // position: 'relative',
        paddingLeft: "24px", // Adjust as needed
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "8px", // Bullet width
          height: "8px", // Bullet height
          backgroundColor: "#C02739", // Change this to your desired color
          borderRadius: "50%",
        },
      },
    },
  },
  typography: {
    fontFamily: ['"Poppins"', "sans-serif", '"Helvetica Neue"'].join(","),
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 13,
    },
    body1: {
      fontSize: 11,
    },
    body2: {
      fontSize: 10,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 14,
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 18,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(59 196 226/1)",
            color: "whitesmoke",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const Theme: React.FC<IThemeChild> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
