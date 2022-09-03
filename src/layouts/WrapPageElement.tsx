import { NoSsr } from "@mui/material";
import React from "react";

import { CookieAlert } from "@/layouts/CookieAlert";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";

export interface WrapPageElementProps {
  children: React.ReactNode;
}

/**
 * WrapPageElement
 * This is useful for setting wrapper components around pages that won't get unmounted on page changes.
 */
export const WrapPageElement = ({
  children,
}: WrapPageElementProps): JSX.Element => {
  return (
    <>
      <NoSsr defer>
        <CookieAlert />
      </NoSsr>
      <Header />
      <main role="main" css={(theme) => ({ marginTop: theme.spacing(8) })}>
        {children}
      </main>
      <Footer />
    </>
  );
};
