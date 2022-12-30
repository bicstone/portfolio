import NavigateNextIcon from "@mui/icons-material/NavigateNextRounded";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useLocation } from "@reach/router";
import { Link as RouterLink, withPrefix } from "gatsby";

import type { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material/Breadcrumbs";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const Breadcrumbs = (
  props: {
    title: string;
  } & MuiBreadcrumbsProps
): JSX.Element => {
  const { title, ...MuiBreadcrumbsProps } = props;

  const location = useLocation();
  const isBlogPostList = location.pathname === withPrefix("/blog");

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      css={{ wordBreak: "break-all" }}
      {...MuiBreadcrumbsProps}
    >
      <Link component={RouterLink} color="inherit" to="/">
        <Typography variant="body2">{SITE_METADATA.title}</Typography>
      </Link>
      {!isBlogPostList && (
        <Link component={RouterLink} color="inherit" to="/blog">
          <Typography variant="body2">{TRANSLATION.blog.title}</Typography>
        </Link>
      )}
      <Typography variant="body2" color="text.primary">
        {title}
      </Typography>
    </MuiBreadcrumbs>
  );
};
