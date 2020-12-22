import React from 'react';
import { PageProps } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Container, Typography, Grid, Card, CardContent, Link as ELink } from '@material-ui/core';
import { Layout } from '../components';

const privacy: React.FC<PageProps> = ({ uri }) => {
  const { t } = useI18next();
  return (
    <Layout cookieAlertShow={false}>
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
