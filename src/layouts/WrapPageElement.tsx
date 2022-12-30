import type { ReactNode } from "react";

import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";

/**
 * WrapPageElement
 * This is useful for setting wrapper components around pages that won't get unmounted on page changes.
 */
export const WrapPageElement = (props: {
  children: ReactNode;
}): JSX.Element => {
  const { children } = props;

  return (
    <div
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        role="main"
        css={(theme) => ({ marginTop: theme.spacing(8), flexGrow: 1 })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

// for gatsby-plugin-layout
export default WrapPageElement;
