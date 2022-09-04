import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Container,
  Typography,
  Link,
} from "@mui/material";
import { graphql, Link as RouterLink } from "gatsby";
import {
  BlogJsonLd,
  BreadcrumbJsonLd,
  GatsbySeo,
} from "gatsby-plugin-next-seo";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { BlogPostIndex } from "src/components";
import { useSiteMetadata, useBuildTime } from "src/hooks";

import type { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material";
import type { PageProps } from "gatsby";
import type { BlogPageQuery } from "src/types";

import { WrapPageElement } from "@/layouts/WrapPageElement";
import { Head } from "@/templates/Head";

type BreadcrumbsProps = {
  siteTitle: string;
  blogTitle: string;
} & MuiBreadcrumbsProps;

const Breadcrumbs = ({
  siteTitle,
  blogTitle,
  ...props
}: BreadcrumbsProps): JSX.Element => {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      {...props}
    >
      <Link component={RouterLink} color="inherit" to="/">
        <Typography variant="body2">{siteTitle}</Typography>
      </Link>
      <Typography variant="body2" color="text.primary">
        {blogTitle}
      </Typography>
    </MuiBreadcrumbs>
  );
};

const Blog = ({ data }: PageProps<BlogPageQuery>): JSX.Element => {
  const { path } = useI18next();
  const { t } = useTranslation();
  const siteMetadata = useSiteMetadata();
  const buildTime = useBuildTime();

  const icon = data.icon.svg.content;
  const iconAlt = data.icon.title;
  const title = `${t("blog.title")} - ${siteMetadata.title}`;

  return (
    <WrapPageElement icon={icon} iconAlt={iconAlt}>
      <GatsbySeo
        title={title}
        description={siteMetadata.description}
        openGraph={{
          type: "profile",
          title,
          description: siteMetadata.description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: title,
            },
          ],
        }}
      />
      <BlogJsonLd
        authorType="Person"
        authorName={`${siteMetadata.lastName} ${siteMetadata.firstName}`}
        url={`${siteMetadata.siteUrl}${path}`}
        title={title}
        headline={siteMetadata.description}
        datePublished={buildTime}
        dateModified={buildTime}
        description={siteMetadata.description}
        images={[`${siteMetadata.siteUrl}${siteMetadata.image}`]}
        publisherLogo={`${siteMetadata.siteUrl}${siteMetadata.image}`}
        publisherName={siteMetadata.title}
        overrides={{
          "@type": "Blog",
          author: {
            "@type": "Person",
            name: `${siteMetadata.lastName} ${siteMetadata.firstName}`,
            url: siteMetadata.siteUrl,
          },
        }}
        posts={data.postsLite.edges.map(({ node }) => ({
          headline: node.title,
          image: node.thumbnail.file.url,
          datePublished: node.created,
        }))}
        defer
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: siteMetadata.title,
            item: `${siteMetadata.siteUrl}/`,
          },
          {
            position: 2,
            name: t("blog.title"),
            item: `${siteMetadata.siteUrl}/blog`,
          },
        ]}
        defer
      />
      <Container maxWidth="md">
        <Breadcrumbs
          siteTitle={siteMetadata.title}
          blogTitle={t("blog.title")}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />

        <Typography component="h1" variant="h5" align="center" paragraph>
          {t("blog.title")}
        </Typography>

        <Typography>{t("blog.caption")}</Typography>

        <div css={(theme) => ({ marginBottom: theme.spacing(2) })}>
          <BlogPostIndex posts={data.posts.group} />
        </div>

        <Breadcrumbs
          siteTitle={siteMetadata.title}
          blogTitle={t("blog.title")}
          css={(theme) => ({
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          })}
        />
      </Container>
    </WrapPageElement>
  );
};

export default Blog;

export const query = graphql`
  query BlogPage($language: String!) {
    # ブログ記事一覧を取得する
    posts: allContentfulBlogPost(sort: { fields: created, order: DESC }) {
      group(field: category___sortKey) {
        edges {
          node {
            id
            title
            slug
            created
            createdDate: created(formatString: "yyyy/MM/DD")
            updated
            updatedDate: updated(formatString: "yyyy/MM/DD")
            excerpt
            tags {
              name
            }
            category {
              name
            }
            thumbnail {
              title
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
    # JSON-LD用
    postsLite: allContentfulBlogPost(sort: { order: DESC, fields: created }) {
      edges {
        node {
          title
          slug
          created
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
    # 原稿を取得する
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    # Bicstoneアイコンを取得する
    # "5qVePilXXNs2WxxIcvndga"は、contentful assetsのアイコンのID
    icon: contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
      title
      svg {
        content
      }
    }
  }
`;

export { Head };
