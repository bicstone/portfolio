import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

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
            body: {
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundSize: "400px 400px",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              fontFamily: FONT_FAMILY,
              minHeight: "100vh",
              overflowWrap: "break-word",
            },
            "& .gatsby-resp-image-background-image": {
              // TODO: gatsby-remark-images-contentful plugin
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
