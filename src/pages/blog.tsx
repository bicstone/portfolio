import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Container,
  Tab,
  Typography,
  tabClasses,
  tabsClasses,
  tabScrollButtonClasses,
  Card,
} from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useCallback, useState } from "react";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";
import type { SyntheticEvent } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import siteMetaData from "@/constants/siteMetaData";
import { BlogPostList } from "@/features/BlogPostList";
import { useBuildTime } from "@/hooks/useBuildTime";
import { Head as HeadTemplate } from "@/layouts/Head";

export const query = graphql`
  query BlogPage($language: String!) {
    blogPostList: allContentfulBlogPost(
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        title
        created
        thumbnail {
          file {
            url
          }
        }
        category {
          id
        }
        ...BlogPostList
      }
    }
    categoryList: allContentfulCategory(sort: { fields: sortKey, order: ASC }) {
      nodes {
        id
        name
      }
    }
    links: allContentfulHello(sort: { fields: sortKey, order: ASC }) {
      nodes {
        ...PortfolioHelloContent
      }
    }
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...UseUrl
        }
      }
    }
  }
`;

export const Head: HeadFC<BlogPageQuery> = ({ location, data }) => {
  const BLOG_TITLE = "まっしろブログ"; // TODO: i18next does not work in Head
  const blogPostList = data.blogPostList.nodes;
  const canonical = `${siteMetaData.siteUrl}${location.pathname}`;
  const title = `${BLOG_TITLE} - ${siteMetaData.title}`;
  const buildTime = useBuildTime();

  return (
    <>
      <HeadTemplate
        location={location}
        title={title}
        description={siteMetaData.description}
        image={`${siteMetaData.siteUrl}${siteMetaData.image}`}
        imageAlt={title}
        type="blog"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: title,
            image: [`${siteMetaData.siteUrl}${siteMetaData.image}`],
            datePublished: buildTime,
            dateModified: buildTime,
            description: siteMetaData.description,
            author: {
              "@type": "Person",
              name: `${siteMetaData.lastName} ${siteMetaData.firstName}`,
              url: siteMetaData.siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: siteMetaData.title,
              logo: {
                "@type": "ImageObject",
                url: `${siteMetaData.siteUrl}${siteMetaData.image}`,
              },
            },
            blogPost: [
              ...blogPostList.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                image: post.thumbnail.file.url,
                datePublished: post.created,
                author: {
                  "@type": "Person",
                  name: `${siteMetaData.lastName} ${siteMetaData.firstName}`,
                  url: siteMetaData.siteUrl,
                },
              })),
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": `${siteMetaData.siteUrl}${"/"}`,
                  name: siteMetaData.title,
                  "@type": "Thing",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": canonical,
                  name: BLOG_TITLE,
                  "@type": "Thing",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: siteMetaData.siteUrl,
            logo: `${siteMetaData.siteUrl}${siteMetaData.image}`,
          }),
        }}
      />
    </>
  );
};

const StyledTabList = styled(TabList)(({ theme }) => ({
  margin: theme.spacing(1),
  minHeight: 0,
  [`& .${tabsClasses.flexContainer}`]: {
    gap: theme.spacing(1),
  },
  [`& .${tabsClasses.indicator}`]: {
    display: "none",
  },
  [`& .${tabScrollButtonClasses.root}`]: {
    borderRadius: theme.spacing(5),
  },
  // "&&&"" is override MUI styles
  [`&&& .${tabScrollButtonClasses.disabled}`]: {
    opacity: 1,
    color: theme.vars.palette.text.disabled,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  background: theme.vars.palette.background.paper,
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.spacing(1.5),
  color: theme.vars.palette.text.primary,
  fontWeight: "bold",
  margin: 0,
  minHeight: 0,
  minWidth: theme.spacing(8),
  padding: theme.spacing(1, 2),
  textTransform: "none",
  [`&.${tabClasses.selected}`]: {
    background: theme.vars.palette.secondary.main,
    color: theme.vars.palette.secondary.contrastText,
  },
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  marginBottom: theme.spacing(1),
}));

const BlogPage = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const blogPostList = data.blogPostList.nodes;
  const categoryList = data.categoryList.nodes;
  const { t } = useI18next();

  const [value, setValue] = useState("all");

  const handleChange = (_: SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  const filteredBlogPostList = useCallback(
    (id: string) => blogPostList.filter((post) => post.category.id === id),
    [blogPostList]
  );

  return (
    <Container
      maxWidth="md"
      css={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Breadcrumbs
        title={t("blog.title")}
        css={(theme) => ({ margin: theme.spacing(1, 0) })}
      />

      <Typography component="h1" variant="h4" align="center">
        {t("blog.title")}
      </Typography>

      <Card
        css={(theme) => ({
          margin: theme.spacing(2, -3),
          padding: theme.spacing(2),
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        })}
      >
        <TabContext value={value}>
          <StyledTabList
            onChange={handleChange}
            textColor="secondary"
            variant="scrollable"
            allowScrollButtonsMobile
          >
            <StyledTab value="all" label="All" />
            {categoryList.map(({ id, name }) => (
              <StyledTab key={id} label={name} value={id} />
            ))}
          </StyledTabList>
          <StyledTabPanel value="all">
            <BlogPostList blogPostList={blogPostList} />
          </StyledTabPanel>
          {categoryList.map(({ id }) => {
            const filteredList = filteredBlogPostList(id);
            return (
              <StyledTabPanel key={id} value={id}>
                <BlogPostList blogPostList={filteredList} />
              </StyledTabPanel>
            );
          })}
        </TabContext>
      </Card>
    </Container>
  );
};

export default BlogPage;
