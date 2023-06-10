import AccessTimeIcon from "@mui/icons-material/AccessTimeRounded";
import Card from "@mui/material/Card";
import CardActionArea, {
  type CardActionAreaProps,
} from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

import { type TimelineItem } from "./utlis";

import { formatDateTime } from "@/utils/format";

export type TimelineCardProps = {
  item: TimelineItem;
} & React.HTMLAttributes<HTMLElement>;

export const TimelineCard = ({
  item,
  ...props
}: TimelineCardProps): JSX.Element => {
  const formattedDate = formatDateTime(item.date, "MMM d");

  const linkProps: CardActionAreaProps = (() => {
    switch (item.typeName) {
      case "Mdx":
        return {
          component: Link,
          to: `/${item.url}`,
        };
      default:
        return {
          LinkComponent: "a" as const,
          href: item.url,
          rel: "external noopener",
        };
    }
  })();

  return (
    <article {...props}>
      <Card elevation={2}>
        <CardActionArea
          {...linkProps}
          title={item.title}
          css={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
              margin: theme.spacing(2),
              width: "100%",
              overflowWrap: "break-word",
            })}
          >
            <Typography
              variant="caption"
              color="textSecondary"
              component="div"
              css={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon
                fontSize="inherit"
                css={(theme) => ({
                  marginRight: theme.spacing(0.5),
                })}
              />
              <time dateTime={item.date}>
                {formattedDate} / {item.typeName}
              </time>
            </Typography>
            <Typography component="h3" variant="h6">
              {item.title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </article>
  );
};
