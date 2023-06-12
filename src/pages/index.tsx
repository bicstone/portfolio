import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { graphql, Script } from "gatsby";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { BentoHello } from "@/features/BentoHello";
import { BentoIcon } from "@/features/BentoIcon";
import { TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query IndexPage {
    timelineItems: allTimeline(sort: { date: DESC }) {
      nodes {
        __typename
        title
        date
        ... on ArticlesYaml {
          url
        }
        ... on CertificationsYaml {
          endDate
        }
        ... on OssesYaml {
          url
        }
        ... on ProjectsYaml {
          endDate
        }
        ... on SlidesYaml {
          url
        }
        ... on Mdx {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC<IndexPageQuery> = ({ location, data }) => {
  const timelineItems = data.timelineItems.nodes;
  const title = `${TRANSLATION.timeline.title} - ${SITE_METADATA.title}`;
  const buildTime = useBuildTime();

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={SITE_METADATA.description}
        image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
        imageAlt={title}
        type="blog"
      />

      <Script
        id="timeline-Page-ld-json-blog"
        strategy="post-hydrate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: title,
            image: [`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`],
            datePublished: buildTime,
            dateModified: buildTime,
            description: SITE_METADATA.description,
            author: {
              "@type": "Person",
              name: `${SITE_METADATA.lastName} ${SITE_METADATA.firstName}`,
              url: SITE_METADATA.siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_METADATA.title,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
              },
            },
            blogPost: [
              ...timelineItems.map((item) => ({
                "@type": "BlogPosting",
                headline: item.title,
                image:
                  item.__typename === "Mdx"
                    ? `${SITE_METADATA.siteUrl}/ogp/${item.slug}.png`
                    : `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
                datePublished: item.date,
                author: {
                  "@type": "Person",
                  name: `${SITE_METADATA.lastName} ${SITE_METADATA.firstName}`,
                  url: SITE_METADATA.siteUrl,
                },
              })),
            ],
          }),
        }}
      />
    </>
  );
};

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const timelineItems = data.timelineItems.nodes;

  return (
    <Container maxWidth="md">
      <div css={(theme) => ({ height: theme.spacing(3) })} />
      <Grid container spacing={2}>
        <Grid item xs={4} sm={3} md={2} component="section">
          <BentoIcon />
        </Grid>
        <Grid item xs={8} sm={9} md={10} component="section">
          <BentoHello />
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://github.com/bicstone"
              rel="external noopener"
            >
              <img
                width={20}
                height={20}
                src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
                alt={TRANSLATION.header.avatar}
                loading="eager"
                decoding="async"
              />
              GitHub
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://twitter.com/bicstone_me"
              rel="external noopener"
            >
              Twitter
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://www.linkedin.com/in/bicstone"
              rel="external noopener"
            >
              LinkedIn
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://youtrust.jp/users/bicstone"
              rel="external noopener"
            >
              YOUTRUST
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://connpass.com/user/bicstone"
              rel="external noopener"
            >
              Connpass
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} md={2} component="section">
          <Card css={{ paddingTop: "100%" }}>
            <CardActionArea
              href="https://pay-career.com/spot_request/2022249011"
              rel="external noopener"
            >
              PayCareer
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <div css={(theme) => ({ height: theme.spacing(3) })} />

      <Typography component="h1" variant="h5" align="center" paragraph>
        {TRANSLATION.timeline.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={timelineItems} />

      <Breadcrumbs
        title={TRANSLATION.timeline.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default IndexPage;
