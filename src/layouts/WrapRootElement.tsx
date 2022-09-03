import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { useThemes } from "src/hooks";

import BackgroundImage from "./background.svg";

interface WrapRootElementProps {
  children: React.ReactNode;
}

/**
 * WrapRootElement
 * This is useful to set up any Provider components that will wrap your application.
 */
export const WrapRootElement = ({
  children,
}: WrapRootElementProps): JSX.Element => {
  const { theme } = useThemes();
  return (
    <EmotionThemeProvider theme={theme}>
      <CssVarsProvider
        defaultMode="system"
        enableColorScheme
        disableTransitionOnChange
        theme={theme}
      >
        <Global
          styles={{
            body: {
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundSize: "400px 400px",
              cursor: "default",
              minHeight: "100vh",
            },
          }}
        />
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionThemeProvider>
  );
};
