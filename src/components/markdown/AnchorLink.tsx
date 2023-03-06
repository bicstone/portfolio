import Link, { type LinkProps } from "@mui/material/Link";

export const AnchorLink = (props: LinkProps): JSX.Element => {
  const href = props?.href;

  if (typeof href === "string" && href.startsWith("#")) {
    // anchor links
    return <Link {...props} color="text.secondary" tabIndex={-1} />;
  }

  return (
    // other links
    <Link {...props} rel="external noreferrer noopener nofollow" />
  );
};
