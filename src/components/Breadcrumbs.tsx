import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { Breadcrumbs as MuiBreadcrumbs, Typography, Link } from "@mui/material";
import { useLocation } from "@reach/router";
import { Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import type { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material";

import { useSiteMetadata } from "@/hooks/useSiteMetadata";

export const Breadcrumbs = (
  props: {
    title: string;
  } & MuiBreadcrumbsProps
): JSX.Element => {
  const { t } = useI18next();
  const siteMetadata = useSiteMetadata();
  const location = useLocation();
  const isBlogPostList = location.pathname === "/blog";

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      css={{ wordBreak: "break-all" }}
      {...props}
    >
      <Link component={RouterLink} color="inherit" to="/">
        <Typography variant="body2">{siteMetadata.title}</Typography>
      </Link>
      {!isBlogPostList && (
        <Link component={RouterLink} color="inherit" to="/blog">
          <Typography variant="body2">{t("blog.title")}</Typography>
        </Link>
      )}
      <Typography variant="body2" color="text.primary">
        {props.title}
      </Typography>
    </MuiBreadcrumbs>
  );
};
