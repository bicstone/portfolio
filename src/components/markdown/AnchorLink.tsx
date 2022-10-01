import { Link } from "@mui/material";

import type { AnchorHTMLAttributes } from "react";

export const AnchorLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element => {
  const href = props?.href;

  if (typeof href === "string" && href.startsWith("#")) {
    // anchor links
    return (
      <Link
        {...props}
        color="text.secondary"
        tabIndex={-1}
        css={{ verticalAlign: "middle" }}
      />
    );
  }

  return (
    // other links
    <Link {...props} rel="external noreferrer noopener nofollow" />
  );
};
