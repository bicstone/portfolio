import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles/CssVarsProvider";

import BackgroundImage from "./background.svg";

import type { ReactNode } from "react";

import { FONT_FAMILY } from "@/components/markdown/constants";
import { useTheme } from "@/hooks/useTheme";

interface WrapRootElementProps {
  children: ReactNode;
}

/**
 * WrapRootElement
 * This is useful to set up any Provider components that will wrap your application.
 */
export const WrapRootElement = ({
  children,
}: WrapRootElementProps): JSX.Element => {
  const theme = useTheme();

  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider defaultMode="system" theme={theme}>
        <Global
          styles={(theme) => ({
            html: {
              height: "100%",
            },
            body: {
              height: "100%",
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundSize: "400px 400px",
              cursor: "default",
              fontFamily: FONT_FAMILY,
              overflowWrap: "break-word",
            },
            "#___gatsby": {
              height: "100%",
            },
            "#gatsby-focus-wrapper": {
              height: "100%",
            },
            ".gatsby-resp-image-background-image": {
              // TODO: gatsby-remark-images-contentful plugin
              // Disable transparency to affected by the image.
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? // rgba(255, 255, 255, 0.12)
                    "#1f1f1f"
                  : // rgba(0, 0, 0, 0.12)
                    "#e0e0e0"
              }`,
              borderRadius: theme.spacing(2),
            },
          })}
        />
        <CssBaseline enableColorScheme />
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
