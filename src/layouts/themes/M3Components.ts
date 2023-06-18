/**

Forked from https://github.com/ZakAlbert/react-material-you-theme/tree/95d94dcbfe

MIT License

Copyright (c) 2022 @ZakAlbert94

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import type { Components, Theme } from "@mui/material/styles";

export const m3Components: Components<Omit<Theme, "palette">> = {
  MuiCssBaseline: {
    defaultProps: {
      enableColorScheme: true,
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.vars.palette.outline,
        backgroundColor: theme.vars.palette.outline,
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginLeft: theme.spacing(1),
      }),
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.vars.palette.surface.main,
        color: theme.vars.palette.onSurface.main,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "color"],
          {
            duration: theme.transitions.duration.short,
          }
        ),
      }),
      colorDefault: ({ theme }) => ({
        background: theme.vars.palette.surface.main,
        color: theme.vars.palette.onSurface.main,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "color"],
          {
            duration: theme.transitions.duration.short,
          }
        ),
      }),
      colorPrimary: ({ theme }) => ({
        background: theme.vars.palette.surfaceVariant.main,
        [theme.getColorSchemeSelector("dark")]: {
          background: theme.vars.palette.surfaceVariant.main,
        },
        color: theme.vars.palette.surface.contrastText,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "color"],
          {
            duration: theme.transitions.duration.short,
          }
        ),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "50px",
        textTransform: "none",
        fontWeight: "bold",
      },
      outlined: ({ theme }) => ({
        borderColor: theme.vars.palette.outline,
        // background: theme.vars.palette.surface.main,
      }),
    },
    variants: [
      {
        props: { variant: "elevated" },
        style: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
          color: theme.vars.palette.primary.main,
          "&:hover": {
            background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.15)`,
          },
        }),
      },
      {
        props: { variant: "filled" },
        style: ({ theme }) => ({
          background: theme.vars.palette.primary.main,
          color: theme.vars.palette.onPrimary.main,
          "&:hover": {
            boxShadow: theme.shadows[1],
            background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.85)`,
          },
        }),
      },
      {
        props: { variant: "tonal" },
        style: ({ theme }) => ({
          background: theme.vars.palette.secondaryContainer.main,
          color: theme.vars.palette.onSecondaryContainer.main,
          "&:hover": {
            boxShadow: theme.shadows[1],
            background: `rgba(${theme.vars.palette.secondaryContainer.mainChannel} / 0.8)`,
          },
        }),
      },
    ],
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        // padding: "10px 8px",
      },
    },
    variants: [
      {
        props: { variant: "elevation" },
        style: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
          transition: theme.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
          "&:hover": {
            boxShadow: theme.shadows[2],
            background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
          },
        }),
      },
      {
        props: { variant: "filled" },
        style: ({ theme }) => ({
          backgroundColor: theme.vars.palette.surfaceVariant.main,
          transition: theme.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
          "&:hover": {
            boxShadow: theme.shadows[1],
            background: `rgba(${theme.vars.palette.surfaceVariant.mainChannel} / 0.8)`,
          },
        }),
      },
      {
        props: { variant: "outlined" },
        style: ({ theme }) => ({
          backgroundColor: theme.vars.palette.surface.main,
          borderColor: theme.vars.palette.outline,
          transition: theme.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
          "&:hover": {
            boxShadow: theme.shadows[1],
            background: `rgba(${theme.vars.palette.onSurface.mainChannel} / 0.05)`,
          },
        }),
      },
    ],
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
        [theme.getColorSchemeSelector("dark")]: {
          background: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`,
        },
        color: theme.vars.palette.onSurface.main,
      }),
      outlined: ({ theme }) => ({
        borderColor: theme.vars.palette.outline,
        background: theme.vars.palette.surface.main,
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: ({ theme }) => ({
        // background: theme.vars.palette.surface.main,
        // color: theme.vars.palette.onSurface.main,
      }),
      paper: ({ theme }) => ({
        border: "0px",
        // background: theme.vars.palette.surfaceVariant.main,
        // color: theme.vars.palette.surface.contrastText,
        background: theme.vars.palette.surface.main,
        color: theme.vars.palette.onSurface.main,
      }),
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: 1,
        paddingBottom: 1,
        "& .MuiListItemButton-root": {
          paddingTop: 8,
          paddingBottom: 8,
        },
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 50,
        "&.Mui-selected": {
          color: theme.vars.palette.onSecondaryContainer.main,
          background: theme.vars.palette.secondaryContainer.main,
          "& > .MuiListItemText-root > .MuiTypography-root": {
            fontWeight: "bold",
          },
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: "inherit",
        minWidth: 32,
        "&.Mui-selected": {
          fontWeight: "bold",
        },
      }),
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        background: theme.vars.palette.secondaryContainer.main,
        color: theme.vars.palette.secondaryContainer.contrastText,
      }),
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&:before": {
          backgroundColor: theme.vars.palette.surfaceVariant.main,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.vars.palette.inverseOnSurface.main,
          color: theme.vars.palette.inverseSurface.main,
        },
      }),
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.vars.palette.inverseSurface.main,
      }),
      message: ({ theme }) => ({
        color: theme.vars.palette.inverseOnSurface.main,
      }),
      action: ({ theme }) => ({
        color: theme.vars.palette.inversePrimary.main,
      }),
    },
  },
};
