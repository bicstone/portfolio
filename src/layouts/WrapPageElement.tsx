import styled from "@emotion/styled";
import { Slice } from "gatsby";

import type { ReactNode } from "react";

const StyledMain = styled("main")(({ theme }) => ({
  marginTop: theme.spacing(8),
  flexGrow: 1,
}));

/**
 * WrapPageElement
 * This is useful for setting wrapper components around pages that won't get unmounted on page changes.
 */
export const WrapPageElement = (props: {
  children: ReactNode;
}): JSX.Element => {
  const { children } = props;

  return (
    <>
      <Slice alias="HEADER" />
      <StyledMain>{children}</StyledMain>
      <Slice alias="FOOTER" />
    </>
  );
};
