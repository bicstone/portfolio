import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Container, Typography, Grid, Card, CardContent, Link as ELink } from '@material-ui/core';
import { PrivacyPageQuery } from 'src/types';
import { Layout } from 'src/components';

const privacy: React.FC<PageProps<PrivacyPageQuery>> = ({ data }) => {
  const { t } = useI18next();
  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout cookieAlertShow={false} icon={icon} iconAlt={iconAlt}>
      <Container maxWidth="md">
        <Grid item>
          <Typography component="h2" variant="h6" paragraph>
            {t('privacy.title')}
          </Typography>
          <Card>
            <CardContent>
              <Typography paragraph>{t('privacy.description.1')}</Typography>
              <Typography paragraph>{t('privacy.description.2')}</Typography>
              <Typography paragraph>
                <ELink
                  href="https://policies.google.com/"
                  rel="external noreferrer noopener nofollow"
                  target="_blank"
                >
                  {t('privacy.description.3')}
                </ELink>
              </Typography>
              <Typography paragraph>{t('privacy.description.4')}</Typography>
              <Typography paragraph>
                <Link to="/">{t('privacy.description.5')}</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Layout>
  );
};

export default privacy;

export const query = graphql`
  query PrivacyPage($language: String!) {
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
