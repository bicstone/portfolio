import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { type TimelineItem } from "./utils";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export type TimelineCardProps = {
  item: TimelineItem;
} & React.HTMLAttributes<HTMLElement>;

export const TimelineCard = ({
  item,
  ...props
}: TimelineCardProps): JSX.Element => {
  const header = ((): string => {
    switch (item.__typename) {
      case "Mdx":
        return "Published a post on my blog";
      case "ArticlesYaml":
        return "Published a post on zenn";
      case "CertificationsYaml":
        return item.title;
      case "HistoriesYaml":
        return item.title;
      case "OssesYaml":
        return "Released an oss project";
      case "ProjectsYaml":
        return item.title;
      case "SlidesYaml":
        return "Published a slide on Speaker Deck";
    }
  })();

  const Content = ((): JSX.Element | null => {
    switch (item.__typename) {
      case "Mdx":
        return <RouterLinkCard title={item.title} slug={item.slug} />;
      case "ArticlesYaml":
        return <LinkedCard title={item.title} url={item.url} />;
      case "CertificationsYaml":
        return null;
      case "HistoriesYaml":
        return null;
      case "OssesYaml":
        return <LinkedCard title={item.title} url={item.url} />;
      case "ProjectsYaml":
        return null;
      case "SlidesYaml":
        return <LinkedCard title={item.title} url={item.url} />;
    }
  })();

  return (
    <article {...props}>
      <Typography variant="body2" gutterBottom>
        {header}
      </Typography>
      {Content}
    </article>
  );
};

interface ExternalLinkedCardProps {
  title: string;
  url: string;
}

const LinkedCard = ({ title, url }: ExternalLinkedCardProps): JSX.Element => {
  const domain = new URL(url).hostname;

  return (
    <CardActionArea
      LinkComponent="a"
      href={url}
      rel="external noopener"
      title={title}
    >
      <Card elevation={2}>
        <CardHeader
          title={
            <Typography component="h3" variant="body1" gutterBottom>
              {title}
            </Typography>
          }
          subheader={
            <div
              css={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1),
              })}
            >
              <img
                width={16}
                height={16}
                src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
                alt={TRANSLATION.header.avatar}
                loading="eager"
                decoding="async"
              />
              <Typography variant="caption" color="text.secondary">
                {domain}
              </Typography>
            </div>
          }
          disableTypography
        />
      </Card>
    </CardActionArea>
  );
};

interface RouterLinkCardProps {
  title: string;
  slug: string;
}

const RouterLinkCard = ({ title, slug }: RouterLinkCardProps): JSX.Element => {
  return (
    <CardActionArea component={RouterLink} title={title} to={`/${slug}`}>
      <Card elevation={2}>
        <CardHeader
          title={
            <Typography component="h3" variant="body1" gutterBottom>
              {title}
            </Typography>
          }
          subheader={
            <div
              css={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1),
              })}
            >
              <img
                width={16}
                height={16}
                src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
                alt={TRANSLATION.header.avatar}
                loading="eager"
                decoding="async"
              />
              <Typography variant="caption" color="text.secondary">
                bicstone.me
              </Typography>
            </div>
          }
          disableTypography
        />
      </Card>
    </CardActionArea>
  );
};
