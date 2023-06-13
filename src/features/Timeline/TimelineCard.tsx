import styled from "@emotion/styled";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded";
import CodeIcon from "@mui/icons-material/CodeRounded";
import StickyNote2Icon from "@mui/icons-material/StickyNote2Rounded";
import VerifiedIcon from "@mui/icons-material/VerifiedRounded";
import Avatar from "@mui/material/Avatar";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import { Link as RouterLink } from "gatsby";

import { type TimelineItem } from "./utils";

import { ExternalLink } from "@/components/ExternalLink";
import gitHubIcon from "@/components/logos/github.svg";
import speakerdeckIcon from "@/components/logos/speakerdeck.png";
import zennIcon from "@/components/logos/zenn.svg";
import { formatDateTime } from "@/utils/format";
import { isDefined } from "@/utils/typeguard";

export type TimelineCardProps = {
  item: TimelineItem;
} & CardProps;

export const TimelineCard = ({
  item,
  ...props
}: TimelineCardProps): JSX.Element => {
  switch (item.__typename) {
    case "Mdx":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <Avatar>
                <StickyNote2Icon />
              </Avatar>
            }
            title={item.title}
            date={item.date}
            slug={item.slug}
          />
        </Card>
      );
    case "ArticlesYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <img
                alt="zenn"
                decoding="async"
                loading="lazy"
                src={zennIcon}
                width={40}
              />
            }
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </Card>
      );
    case "CertificationsYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <Avatar>
                <VerifiedIcon />
              </Avatar>
            }
            title={item.title}
            date={item.date}
            slug="/me"
          />
        </Card>
      );
    case "HistoriesYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <Avatar>
                <AutoAwesomeIcon />
              </Avatar>
            }
            title={item.title}
            date={item.date}
            slug="/me"
          />
        </Card>
      );
    case "OssesYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <img
                alt="GitHub"
                src={gitHubIcon}
                decoding="async"
                loading="lazy"
                width={40}
              />
            }
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </Card>
      );
    case "ProjectsYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <Avatar>
                <CodeIcon />
              </Avatar>
            }
            title={item.title}
            date={item.date}
            slug="/me"
          />
        </Card>
      );
    case "SlidesYaml":
      return (
        <Card elevation={2} {...props}>
          <CardContent
            avatar={
              <img
                alt="Speaker Deck"
                src={speakerdeckIcon}
                decoding="async"
                loading="lazy"
                width={40}
              />
            }
            title={item.title}
            date={item.date}
            url={item.url}
          />
        </Card>
      );
  }
};

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "stretch",
})) as typeof CardActionArea;

type ContentProps =
  | {
      avatar: React.ReactNode;
      title: string;
      date: string;
      url: string;
      slug?: null;
    }
  | {
      avatar: React.ReactNode;
      title: string;
      date: string;
      url?: null;
      slug: string;
    };

const CardContent = ({
  avatar,
  title,
  date,
  slug,
  url,
}: ContentProps): JSX.Element => {
  const formattedDate = formatDateTime(date, "yyyy/MM/dd");

  const linkProps = isDefined(slug)
    ? {
        component: RouterLink,
        to: `/${slug}`,
        title,
      }
    : {
        LinkComponent: "a" as const,
        href: url,
        rel: "external noopener",
        title,
      };

  return (
    <StyledCardActionArea {...linkProps}>
      <CardHeader
        avatar={avatar}
        titleTypographyProps={{
          variant: "body1",
          sx: (theme) => ({
            display: "-webkit-box",
            maxHeight: "3rem",
            overflow: "hidden",
            marginBottom: theme.spacing(1),
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            wordBreak: "break-all",
          }),
        }}
        title={isDefined(slug) ? title : <ExternalLink>{title}</ExternalLink>}
        subheaderTypographyProps={{
          variant: "caption",
          color: "text.secondary",
        }}
        subheader={formattedDate}
      />
    </StyledCardActionArea>
  );
};
