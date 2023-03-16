import Link, { type LinkProps } from "@mui/material/Link";

export const AnchorLink = (props: LinkProps): JSX.Element => {
  return <Link {...props} rel="external noreferrer noopener nofollow" />;
};
