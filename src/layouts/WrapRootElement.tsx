import { CustomThemeProvider } from "./themes";

import type Sentry from "@sentry/browser";
import type { ReactNode } from "react";

interface WrapRootElementProps {
  children: ReactNode;
}

declare global {
  interface Window {
    Sentry?: typeof Sentry;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle?: any;
  }
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
