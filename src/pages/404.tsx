import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button } from 'gatsby-theme-material-ui';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import { LocalHotel as LocalHotelIcon } from '@material-ui/icons';
import { NotFoundPageQuery } from '../types';
import { Layout } from '../components';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const NotFound: React.FC<PageProps<NotFoundPageQuery>> = ({ data }) => {
  const classes = useStyles();
  const { t } = useI18next();
  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt}>
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
      </Container>
    </Layout>
  );
};

export default NotFound;

export const query = graphql`
  query NotFoundPage($language: String!) {
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
