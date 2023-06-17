import { CustomThemeProvider } from "./themes";

import type { ReactNode } from "react";

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
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};
