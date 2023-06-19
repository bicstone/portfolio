import LinkIcon from "@mui/icons-material/LinkRounded";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import type { AnchorHTMLAttributes } from "react";

import { isDefined } from "@/utils/typeguard";

export const LinkCard = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element => {
  const { title, href } = props;

  if (!isDefined(title) || !isDefined(href)) {
    isDefined(window.Sentry) &&
      window.Sentry.captureException(
        new Error(`LinkCard must provide both title and href`)
      );
  }

  return (
    <Card component="figure" sx={{ margin: 2 }} elevation={2}>
      <CardActionArea component="a" rel="external noopener nofollow" {...props}>
        <CardHeader
          title={
            <Typography variant="subtitle1" sx={{ wordBreak: "break-all" }}>
              {title}
            </Typography>
          }
          subheader={
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <LinkIcon
                color="inherit"
                sx={{
                  marginRight: 0.5,
                  flexShrink: 0,
                }}
              />
              <div
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  wordBreak: "normal",
                }}
              >
                {href}
              </div>
            </Typography>
          }
          disableTypography
          sx={{ "& .MuiCardHeader-content": { overflow: "hidden" } }}
        />
      </CardActionArea>
    </Card>
  );
};
