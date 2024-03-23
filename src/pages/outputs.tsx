import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { OutputsPageQuery } from "@/generated/graphqlTypes";
import type { HeadFC, PageProps } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/Timeline";
import { ArchivedList } from "@/features/TimelineArchived";
import { TimelineTabList } from "@/features/TimelineTab";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query OutputsPage {
    outputs: allOutput(sort: { date: DESC }) {
      ...TimelineListOutput
    }
    qiitaItems: allQiitaJson(sort: { created_at: DESC }) {
      ...TimelineArchivedList
    }
    site {
      buildTime
    }
  }
`;

export const Head: HeadFC<OutputsPageQuery> = ({ location, data }) => {
  const title = `${TRANSLATION.outputs.title} - ${SITE_METADATA.title}`;
  const outputsItems = data.outputs.group.flatMap(({ nodes }) => nodes);
  const buildTime = data.site.buildTime;

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        imageAlt={title}
        type="blog"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: SITE_METADATA.title,
            image: [SITE_METADATA.logoImage],
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
                url: SITE_METADATA.logoImage,
              },
            },
            blogPost: [
              ...outputsItems.map((item) => ({
                "@type": "BlogPosting",
                headline: item.title,
                image: SITE_METADATA.logoImage,
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

const OutputsPage = ({ data }: PageProps<OutputsPageQuery>): JSX.Element => {
  const title = TRANSLATION.outputs.title;
  const outputGroups = data.outputs;
  const qiitaItems = data.qiitaItems;

  return (
    <Container
      maxWidth="md"
      fixed
      css={(theme) => ({ margin: theme.spacing(4, "auto") })}
    >
      <Breadcrumbs title={title} />
      <Spacer y={4} />
      <TimelineTabList />
      <Spacer y={2} />
      <TimelineList groups={outputGroups} />
      <Spacer y={4} />
      <Breadcrumbs title={title} />
      <Spacer y={2} />
      <Typography variant="h5" component="h2" fontWeight="bold">
        Archived
      </Typography>
      <Spacer y={6} />
      <ArchivedList items={qiitaItems} />
      <Spacer y={6} />
    </Container>
  );
};

export default OutputsPage;
