import styled from "@emotion/styled";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded";
import CodeIcon from "@mui/icons-material/CodeRounded";
import TextSnippetIcon from "@mui/icons-material/TextSnippetRounded";
import VerifiedIcon from "@mui/icons-material/VerifiedRounded";
import Avatar from "@mui/material/Avatar";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import red from "@mui/material/colors/red";
import { isSameYear } from "date-fns";
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
    case "Mdx": {
      const date = formatDateTime(item.date, "M月d日");

      return (
        <Card {...props}>
          <CardContent
            avatar={
              <Avatar variant="rounded">
                <TextSnippetIcon />
              </Avatar>
            }
            title={item.title}
            subTitle={`${date} on Blog`}
            slug={item.slug}
          />
        </Card>
      );
    }
    case "ArticlesYaml": {
      const date = formatDateTime(item.date, "M月d日");

      return (
        <Card {...props}>
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
            subTitle={`${date} on Zenn`}
            url={item.url}
          />
        </Card>
      );
    }
    case "CertificationsYaml": {
      const date = formatDateTime(item.date, "M月d日");

      return (
        <Card {...props}>
          <CardContent
            avatar={
              <Avatar variant="rounded" css={{ background: red[200] }}>
                <VerifiedIcon />
              </Avatar>
            }
            title={item.title}
            subTitle={date}
            slug="me"
          />
        </Card>
      );
    }
    case "HistoriesYaml": {
      const date = formatDateTime(item.date, "M月");

      return (
        <Card {...props}>
          <CardContent
            avatar={
              <Avatar variant="rounded" css={{ background: red[200] }}>
                <AutoAwesomeIcon />
              </Avatar>
            }
            title={item.title}
            subTitle={date}
            slug="me"
          />
        </Card>
      );
    }
    case "OssesYaml": {
      const date = formatDateTime(item.date, "M月");

      return (
        <Card {...props}>
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
            subTitle={`${date} on GitHub`}
            url={item.url}
          />
        </Card>
      );
    }
    case "ProjectsYaml": {
      const date = new Date(item.date);
      const endDate = new Date(item.endDate);
      const format = isSameYear(date, endDate) ? "M月" : "yy年M月";
      const dateFormatted = formatDateTime(item.date, "M月");
      const endDateFormatted = formatDateTime(item.endDate, format);
      const subTitle =
        item.endDate !== ""
          ? `${dateFormatted} ～ ${endDateFormatted}`
          : `${dateFormatted} ～`;

      return (
        <Card {...props}>
          <CardContent
            avatar={
              <Avatar variant="rounded" css={{ background: red[200] }}>
                <CodeIcon />
              </Avatar>
            }
            title={item.title}
            subTitle={subTitle}
            slug="me"
          />
        </Card>
      );
    }
    case "SlidesYaml": {
      const date = formatDateTime(item.date, "M月d日");

      return (
        <Card {...props}>
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
            subTitle={`${date} on Speaker Deck`}
            url={item.url}
          />
        </Card>
      );
    }
  }
};

const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "stretch",
}) as typeof CardActionArea;

type ContentProps =
  | {
      avatar: React.ReactNode;
      title: string;
      subTitle: string;
      url: string;
      slug?: null;
    }
  | {
      avatar: React.ReactNode;
      title: string;
      subTitle: string;
      url?: null;
      slug: string;
    };

const CardContent = ({
  avatar,
  title,
  subTitle,
  slug,
  url,
}: ContentProps): JSX.Element => {
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
        subheader={subTitle}
      />
    </StyledCardActionArea>
  );
};
