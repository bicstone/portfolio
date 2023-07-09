import LinkIcon from "@mui/icons-material/LinkRounded";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import type { AnchorHTMLAttributes } from "react";

import { isDefined } from "@/utils/typeguard";

export const LinkCard = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element => {
  const { title, href } = props;

  if (!isDefined(title) || !isDefined(href)) {
    isDefined(window.Sentry) &&
      window.Sentry.captureException(
        new Error(`LinkCard must provide both title and href`),
      );
  }

  return (
    <Card
      component="figure"
      css={(theme) => ({ margin: theme.spacing(2) })}
      elevation={2}
    >
      <CardActionArea component="a" rel="external noopener nofollow" {...props}>
        <CardHeader
          title={
            <Typography variant="subtitle1" css={{ wordBreak: "break-all" }}>
              {title}
            </Typography>
          }
          subheader={
            <Typography
              variant="caption"
              color="text.secondary"
              css={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <LinkIcon
                color="inherit"
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                  flexShrink: 0,
                })}
              />
              <div
                css={{
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
          css={{ "& .MuiCardHeader-content": { overflow: "hidden" } }}
        />
      </CardActionArea>
    </Card>
  );
};
