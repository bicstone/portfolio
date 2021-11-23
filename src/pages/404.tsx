import React from 'react';
import { graphql, PageProps, Link as RouterLink } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Box, Typography, Container, useTheme, Button } from '@mui/material';
import { LocalHotel as LocalHotelIcon } from '@mui/icons-material';
import { NotFoundPageQuery } from 'src/types';
import { Layout } from 'src/components';

const NotFound: React.FC<PageProps<NotFoundPageQuery>> = ({ data }) => {
  const theme = useTheme();
  const { t } = useI18next();
  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt}>
      <Container maxWidth="md">
        <Box margin={2} textAlign="center">
          {/* 見つかりませんでした */}
          <LocalHotelIcon css={{ width: theme.spacing(20), height: theme.spacing(20) }} />
          <Typography variant="h4" component="h1" paragraph>
            {t('not-found.title')}
          </Typography>
          <Typography variant="body1">{t('not-found.description')}</Typography>
        </Box>
        <Box margin={2} textAlign="center">
          {/* ホームに戻る */}
          <Button component={RouterLink} variant="contained" to="/" size="large">
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
