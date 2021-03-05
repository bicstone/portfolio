import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button } from 'gatsby-theme-material-ui';
import { makeStyles, Container, Box, Typography } from '@material-ui/core';
import { LocalHotel as LocalHotelIcon } from '@material-ui/icons';
import { Layout, BlogPostIndex } from 'src/components';
import { NotFoundPageQuery } from 'src/types';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const NotFound: React.FC<PageProps<NotFoundPageQuery>> = ({ data }) => {
  const classes = useStyles();
  const { t } = useI18next();
  return (
    <Layout icon={data.icon?.svg?.content || ''} iconAlt={data.icon?.title || ''}>
      <Container maxWidth="md">
        <Box margin={2} textAlign="center">
          {/* 見つかりませんでした */}
          <LocalHotelIcon className={classes.icon} />
          <Typography variant="h4" component="h1" paragraph>
            {t('not-found.title')}
          </Typography>
          <Typography variant="body1">{t('not-found.description')}</Typography>
        </Box>
        <Box margin={2} textAlign="center">
          {/* ホームに戻る */}
          <Button variant="contained" to="/" size="large">
            {t('not-found.back-to-home')}
          </Button>
        </Box>
        <Box margin={2}>
          {/* ブログ記事一覧 */}
          <BlogPostIndex posts={data.posts.group} />
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;

export const query = graphql`
  query NotFoundPage($language: String!) {
    # ブログ記事一覧を取得する
    posts: allNotionPageBlog(sort: { fields: [tags, createdAt], order: [ASC, DESC] }) {
      group(field: tags) {
        edges {
          node {
            pageId
            slug
            title
            excerpt
            tags
            createdAt
            pageIcon
          }
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
  }
`;
