import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { OutputsPageQuery } from "@/generated/graphqlTypes";
import type { HeadFC, PageProps } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { TimelineList } from "@/features/TimelineList";
import { TimelineTabList } from "@/features/TimelineTab";
import { useBuildTime } from "@/hooks/useBuildTime";
import { HeadTemplate } from "@/layouts/HeadTemplate";

export const query = graphql`
  query OutputsPage {
    outputs: allOutput(sort: { date: DESC }) {
      nodes {
        __typename
        title
        date
        ... on ArticlesYaml {
          url
        }
        ... on SlidesYaml {
          url
        }
        ... on OssesYaml {
          url
        }
        ... on Mdx {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC<OutputsPageQuery> = ({ location, data }) => {
  const title = `${TRANSLATION.outputs.title} - ${SITE_METADATA.title}`;

  return (
    <HeadTemplate
      location={location}
      title={title}
      description={SITE_METADATA.description}
      image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
      imageAlt={title}
      type="blog"
    />
  );
};

const OutputsPage = ({ data }: PageProps<OutputsPageQuery>): JSX.Element => {
  const outputItems = data.outputs.nodes;

  return (
    <Container maxWidth="md">
      <Breadcrumbs
        title={TRANSLATION.outputs.title}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {TRANSLATION.outputs.title}
      </Typography>

      <TimelineTabList />

      <TimelineList items={outputItems} />

      <Breadcrumbs
        title={TRANSLATION.outputs.title}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default OutputsPage;
