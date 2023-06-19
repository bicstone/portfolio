import NavigateNextIcon from "@mui/icons-material/NavigateNextRounded";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import type { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material/Breadcrumbs";

import { SITE_METADATA } from "@/constants/SITE_METADATA";

export const Breadcrumbs = (
  props: {
    title: string;
  } & MuiBreadcrumbsProps
): JSX.Element => {
  const { title, ...MuiBreadcrumbsProps } = props;

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ wordBreak: "break-all" }}
      {...MuiBreadcrumbsProps}
    >
      <Link component={RouterLink} color="inherit" to="/">
        <Typography variant="body2">{SITE_METADATA.title}</Typography>
      </Link>
      <Typography variant="body2" color="text.primary">
        {title}
      </Typography>
    </MuiBreadcrumbs>
  );
};
