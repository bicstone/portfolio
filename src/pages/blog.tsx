import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Container,
  Tab,
  Typography,
  tabClasses,
  tabsClasses,
  tabScrollButtonClasses,
} from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useCallback, useMemo } from "react";

import type { BlogPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";
import type { SyntheticEvent } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import siteMetaData from "@/constants/siteMetaData";
import { BlogPostList } from "@/features/BlogPostList";
import { useBuildTime } from "@/hooks/useBuildTime";
import { Head as HeadTemplate } from "@/layouts/Head";
import { getFileName } from "@/utils/createOgpImage";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  query BlogPage($language: String!) {
    blogPostList: allContentfulBlogPost(sort: { created: DESC }) {
      nodes {
        title
        created
        category {
          id
        }
        ...BlogPostList
      }
    }
    categoryList: allContentfulCategory(sort: { sortKey: ASC }) {
      nodes {
        id
        slug
        name
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
  const blogPostList = data.blogPostList.nodes;
  const title = `${siteMetaData.blogTitle} - ${siteMetaData.title}`;
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
                image: `${siteMetaData.siteUrl}/ogp/${getFileName(post.slug)}`,
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
                  "@id": `${siteMetaData.siteUrl}${location.pathname}`,
                  name: siteMetaData.blogTitle,
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
  margin: theme.spacing(1, 0),
  minHeight: 0,
  [`& .${tabsClasses.flexContainer}`]: {
    gap: theme.spacing(0.5),
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

const ALL_VALUE = "all";

const BlogPage = ({
  data,
  location,
}: PageProps<BlogPageQuery>): JSX.Element => {
  const blogPostList = data.blogPostList.nodes;
  const categoryList = data.categoryList.nodes;

  const { t } = useI18next();

  const hash = useMemo(() => location.hash.slice(1), [location.hash]);
  const value = useMemo(
    () =>
      categoryList.map((category) => category.slug).includes(hash)
        ? hash
        : ALL_VALUE,
    [categoryList, hash]
  );

  const handleChange = useCallback((_: SyntheticEvent, value: string) => {
    if (isDefined(window)) {
      window.location.hash = `#${value}`;
    }
  }, []);

  const filteredBlogPostList = useCallback(
    (id: string) => blogPostList.filter((post) => post.category.id === id),
    [blogPostList]
  );

  return (
    <Container
      maxWidth="md"
      css={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Always display scrollbar-Y to prevent flash */}
      <Global styles={{ body: { overflowY: "scroll" } }} />

      <Breadcrumbs
        title={t("blog.title")}
        css={(theme) => ({ marginBottom: theme.spacing(2) })}
      />

      <Typography component="h1" variant="h4" align="center" paragraph>
        {t("blog.title")}
      </Typography>

      <TabContext value={value}>
        <StyledTabList
          onChange={handleChange}
          textColor="secondary"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <StyledTab value={ALL_VALUE} label="All" />
          {categoryList.map(({ slug, name }) => (
            <StyledTab key={slug} label={name} value={slug} />
          ))}
        </StyledTabList>
        <StyledTabPanel value={ALL_VALUE}>
          <BlogPostList blogPostList={blogPostList} />
        </StyledTabPanel>
        {categoryList.map(({ id, slug }) => {
          const filteredList = filteredBlogPostList(id);
          return (
            <StyledTabPanel key={slug} value={slug}>
              <BlogPostList blogPostList={filteredList} />
            </StyledTabPanel>
          );
        })}
      </TabContext>

      <Breadcrumbs
        title={t("blog.title")}
        css={(theme) => ({ margin: theme.spacing(2, 0) })}
      />
    </Container>
  );
};

export default BlogPage;
