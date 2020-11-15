import React from 'react';
import { PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Container, Typography } from '@material-ui/core';
import {
  Layout,
  Hello,
  Projects,
  WhatICanDos,
  Skills,
  Contacts,
  Histories,
  OSSes,
} from '../components';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const home: React.FC<PageProps> = ({ path }) => {
  const { t } = useI18next();
  const classes = useStyles();
  return (
    <Layout pathname={path}>
      <Container maxWidth="md" className={classes.container}>
        <Hello />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <WhatICanDos />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('index.projects-title')}
        </Typography>
        <Projects />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('index.osses-title')}
        </Typography>
        <OSSes />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('index.skills-title')}
        </Typography>
        <Skills />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h2" variant="h4" align="center">
          {t('index.histories-title')}
        </Typography>
        <Histories />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('index.contacts-title')}
        </Typography>
        <Contacts />
      </Container>
    </Layout>
  );
};

export default home;
