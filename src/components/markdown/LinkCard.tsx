import { LinkRounded as LinkIcon } from "@mui/icons-material";
import { Card, CardActionArea, CardHeader, Typography } from "@mui/material";
import { captureException } from "@sentry/gatsby";

import type { AnchorHTMLAttributes } from "react";

import { isDefined } from "@/utils/typeguard";

export const LinkCard = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element => {
  const { title, href } = props;

  if (!isDefined(title) || !isDefined(href)) {
    captureException(new Error(`LinkCard must provide both title and href`));
  }

  return (
    <Card
      component="figure"
      css={(theme) => ({ margin: theme.spacing(2) })}
      elevation={2}
    >
      <CardActionArea
        component="a"
        rel="external noreferrer noopener nofollow"
        {...props}
      >
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
