import colors from "./colors";
import themePalette from "./themePalette";
import { createTheme, PaletteOptions } from "@mui/material/styles";
const theme = createTheme({
    typography: {
        fontFamily: "Rubik, sans-serif",
        h3: {
            display: "flex",
            fontSize: "1.5rem",
            fontWeight: "normal",
            lineHeight: "133.4%",
            alignItems: "center",
            color: colors.black,
        },
        h6: {
            fontWeight: 600,
        },
        subtitle1: {
            fontWeight: 500,
            textAlign: "left",
        },
        subtitle2: {
            fontWeight: 500,
            textAlign: "left",
        },
        body2: {
            display: "block",
            lineHeight: "166%",
            fontSize: "0.75rem",
            fontWeight: "normal",
            alignItems: "center",
        },
    },
    palette: themePalette as PaletteOptions,
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                            borderColor: colors.hoverColor,
                        },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: "12px 0px !important",
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                contained: {
                    marginLeft: "0px !important",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    fontWeight: 500,
                    color: colors.white,
                    letterSpacing: "0.4px",
                    boxShadow:
                        "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                },
            },
        },
    },
});

export { theme, colors };
